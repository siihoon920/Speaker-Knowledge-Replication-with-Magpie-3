<template>
  <Experiment title="magpie demo">


      <Screen title="Welcome">
        Thank you for taking part in this experiment.</br></br>

        Participation in this experiment is voluntary. You may quit at any moment without negative consequences.</br></br>

        The data from this experiment will be used for scientific purposes only. It will be stored anonymously and may be shared with other scientists.</br></br>

        By proceeding you indicate that you have read, understood and that you agree with these terms.</br>

        <button @click="$magpie.nextScreen()">BEGIN THE EXPERIMENT </button>
      </Screen>

      <Screen title="Are You a Bot?">
        <p>{{speaker}} says to {{listener}}: It's a beautiful day, isn't it?</p>
        <p>Who is {{speaker}} talking to?</p>
        <p>enter your answer in lower case.</p>
        <TextareaInput :response.sync="botCaptcha_response" />
        <button @click="(botCaptcha_response.toLowerCase()==listener.toLowerCase() && botCaptcha_count<3)?$magpie.nextScreen():iterBotCaptcha(botCaptcha_response)">next</button>
        <p>{{botCaptcha_instruction[botCaptcha_count]}}</p>
      </Screen>

      
      <Screen v-for="(trial,i) in practice_trial_info">
        <Slide>
          <br/>
          <br/>
          <br/>
          <SelfPacedReadingInput_SpeakerKnowledge
            :context="trial.context.split('|')"
            :triggersentence="trial.trigger.split('|')"
            :continuation="trial.continuation.split('|')"
            :underline="'words'"
            :response-times.sync="RT"
            @end="endSelfPacedReading(trial)"
          />
        </Slide>

        <Slide>
          <br/>
          <br/>
          <br/>
          <p>{{trial.question}}</p>
          <br/>
          <ForcedChoiceInput
            :options="[trial.option1, trial.option2]"
            :question="trial.question"
            :response.sync="answer"
            @update:response="endForcedChoice(trial), ($magpie.measurements.answer==='yes'?$magpie.saveAndNextScreen():$magpie.nextScreen('get_ready'))"
          />
        </Slide>
      </Screen>
          

    

      <Screen title="Get ready" label="get_ready">
        The practice trials are now complete. When you are ready to begin the study, click 'Begin'.
        <button @click="$magpie.nextScreen()">BEGIN THE EXPERIMENT </button>
      </Screen>

      

      <Screen v-for="(trial,i) in main_trials" :progress="i/34">


        <Slide>
          <br/>
          <br/>
          <br/>
          <SelfPacedReadingInput_SpeakerKnowledge
            :context="trial.context.split('|')"
            :triggersentence="trial.trigger.split('|')"
            :continuation="trial.continuation.split('|')"
            :underline="'words'"
            :response-times.sync="RT"
            @end="endSelfPacedReading(trial)"
          />
        </Slide>
        <Slide>
          <br/>
          <br/>
          <br/>
          <p>{{trial.question}}</p>
          <br/>
          <ForcedChoiceInput
          :options="['Yes', 'No']"
          :response.sync="answer"
          @update:response="endForcedChoice(trial), $magpie.saveAndNextScreen()
"
        />
        </Slide>
        

      </Screen>

      <PostTestScreen/>
      <SubmitResultsScreen/>




  </Experiment>
</template>

<script>
import _ from 'lodash';
import {practice_trial_info, main_trials} from './trials.js';
import SelfPacedReadingInput_SpeakerKnowledge from './SelfPacedReadingInput_SpeakerKnowledge.vue';
import DebugResultsScreen from 'magpie-base/src/components/screens/DebugResultsScreen.vue';
import SubmitResultsScreen from 'magpie-base/src/components/screens/SubmitResultsScreen.vue';
import { DropdownInput } from 'magpie-base';
import PostTestScreen from 'magpie-base/src/components/screens/PostTestScreen.vue';
export default {
  name: 'App',
  components: {
    SelfPacedReadingInput_SpeakerKnowledge,
    DebugResultsScreen,
    SubmitResultsScreen
  },
  data() {
    return {
      botCaptcha_response:'',
      botCaptcha_count:0,
      speaker: _.sample(['James', 'John', "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"]),
      listener: _.sample(["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret"]),
      practice_trial_info,
      main_trials,
      RT : [],
      answer : 'unavailable',
      botCaptcha_instruction : {
        '1':'This is incorrect. You have 2 more trials.',
        '2':'This is incorrect. You have 1 more trials.',
        '3':'Error: You failed the comprehension questions too many times.'
      }
    };
  },
  computed: {
    // Expose lodash to template code
    _() {
      return _;
    },
   
  },
  methods: {
    endSelfPacedReading(trial){
      this.$magpie.measurements.type = trial.type;
      this.$magpie.measurements.ID = trial.ID;
      this.$magpie.measurements.ID = trial.ID;
      this.$magpie.measurements.context_type = trial.context_type;
      this.$magpie.measurements.context = trial.context;
      this.$magpie.measurements.RT_context = this.RT[0];
      this.$magpie.measurements.trigger_type = trial.trigger_type;
      this.$magpie.measurements.trigger = trial.trigger;
      this.$magpie.measurements.RT_trigger = this.RT[1];
      this.$magpie.measurements.continuation_type = trial.continuation_type;
      this.$magpie.measurements.continuation = trial.continuation;
      this.$magpie.measurements.RT_continuation = this.RT[2];
      this.$magpie.nextSlide();
    },
    endForcedChoice(trial){
      this.$magpie.measurements.question = trial.question;
      this.$magpie.measurements.correct_answer = trial.correct_answer;
      this.$magpie.measurements.answer = this.answer
    },
    iterBotCaptcha(botCaptcha_response){
      this.botCaptcha_count+=1;
    }
  }
};
</script>
