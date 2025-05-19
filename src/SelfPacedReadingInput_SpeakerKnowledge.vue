<docs>

    ```vue
      selfPacedReadingInput adjusted for Speaker Knowledge Experiment
    ```
    
    </docs>
    <template>
      <div>
        <!-- length + 2, because we have an initial empty slice and a last empty slice to record the rt -->
        <SerialInput :iterations="chunks.length + 2" @end="end">
          <template #default="{ i, next }">
            <template v-if="timeout">
              <TimerStop
                id="responseTime"
                @update:time="RT[sentenceCount].push($event);"
              />
              <Wait :time="0" @done="end" />
            </template>
            <template v-else>
              <TimerStop
                v-if="i >= 1"
                id="responseTime"
                @update:time="
                  RT[sentenceCount].push($event);
                  wordCountIter();
                  i > chunks.length ? next() : null;
                  if (wordCount > sentences[sentenceCount].length) {
                    sentenceCountIter();
                    wordCountReset();
                  }
                "
                
              />
              <TimerStart v-if="i >= 0" id="responseTime" />
              <KeypressInput
                :keys="{ [trigger]: instructions }"
                :show-options="showKeypressOptions"
                @update:response="next"
              />
              <Wait
                v-if="responseTimeLimit !== -1 && i > 1"
                :time="responseTimeLimit"
                @done="() => {timeout = true;}"
              />
              <div
                :class="{
                  text: true,
                  'underline-words': underline === 'words',
                  'underline-sentence': underline === 'sentence',
                  'show-all': wordPos === 'next'
                }"
              >
                <template v-for="(sentence, sentenceIndex) in sentences">
                  <span
                    v-for="(word, wordIndex) in sentence"
                    :key="`${sentenceIndex}-${wordIndex}`"
                    :class="{ current: sentenceCount === sentenceIndex && wordCount-1 === wordIndex}"
                    v-text= 'word'
                  >
                  </span>
                  <span>
                    <br/>
                  </span>
                </template>
              </div>
              
  
            </template>
          </template>
        </SerialInput>
      </div>
    </template>
    
    <script>
    import KeypressInput from '../node_modules/magpie-base/src/components/inputs/KeypressInput.vue';
    import SerialInput from '../node_modules/magpie-base/src/components/inputs/SerialInput';
    import TimerStop from '../node_modules/magpie-base/src/components/helpers/TimerStop';
    import TimerStart from '../node_modules/magpie-base/src/components/helpers/TimerStart';
    import Wait from '../node_modules/magpie-base/src/components/helpers/Wait';
    
    export default {
      name: 'SelfPacedReadingInput_SpeakerKnowledge',
      components: { Wait, TimerStart, TimerStop, SerialInput, KeypressInput },
      props: {
        context: { type: Array, required: true },
        triggersentence: { type: Array, required: true },
        continuation: { type: Array, required: true },
        instructions: { type: String, default: 'Press SPACE to reveal the words.' },
        trigger: { type: String, default: ' ' },
        underline: { type: String, default: 'none' },
        wordPos: { type: String, default: 'next' },
        showKeypressOptions: { type: Boolean, default: true },
        responseTimeLimit: { type: Number, default: -1 }
      },
      data() {
        return {
          sentenceCount: 0,
          wordCount: 0,
          RT: [[], [], []],
          timeout: false
        };
      },
      computed: {
        chunks() {
          return [...this.context, ...this.triggersentence, ...this.continuation];
        },
        sentences() {
          return [this.context, this.triggersentence, this.continuation];
        }
      },
      methods: {
        wordCountIter() {
          this.wordCount++;
        },
        sentenceCountIter() {
          this.sentenceCount++;
        },
        wordCountReset() {
          this.wordCount = 1;
        },
        end() {
          this.$emit('update:response-times', this.RT);
          this.$emit('update:timeout', this.timeout);
          this.$emit('end');
        },
        timerStop(){
          this.RT[this.sentenceCount].push($event);
          this.wordCountIter();
          this.i > this.chunks.length ? next() : null;
          if (this.wordCount > this.sentences[this.sentenceCount].length) {
            this.sentenceCountIter();
            this.wordCountReset();
          }
        }
      }
    };
    </script>
    
    <style scoped>
    .text {
      margin: 30px auto;
    }
    
    .text * {
      margin-right: 5px;
    }
    
    .text.underline-sentence * {
      margin-right: 0;
      padding-right: 5px;
      border-bottom: 1px solid black;
    }
    
    .text.underline-words * {
      border-bottom: 1px solid black;
    }
    
    .text :not(.current) {
      display: none;
    }
    
    .text.show-all :not(.current) {
      color: transparent;
      display: inline;
    }
    
    .text .current {
      color: black;
      display: inline;
    }
    </style>
  