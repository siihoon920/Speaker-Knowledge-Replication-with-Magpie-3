# Research question
Does speaker knowledge influence implicature interpretation?

# Motivation

while it has been shown that implicature interpretation depends on many grammatical and lexical context, it is still debated whether speaker knowledge affects implicature interpretation for reasons. First of all, while many previously studied contexts are binary, reliability of speaker knowledge exists on a spectrum. Secondly, speaker knowledge can be traced back to the question of whether our comprehension is egocentric or not, which is still heavily debated with arguments for both sides. This study successes the method of self paced reading to measure processing difficulty, which serves as a hint about implicatuer interpreation. 

# Material 

## real trials

we use 24 situations in which 3 binary factors below can vary:   

- context type about the certainty level of speaker knowledge(full or partial)
- type of trigger( scalar trigger vs focused trigger)
- type of continuation (complement vs cancelation)  

### sentences for self paced reading 

Each situation consists of three sentences for self paced reading and a comprehension question.

Each sentence is a choice between two possible sentences, which represent the two factors respectively. Possible factor combinations for all three sentences are as below. The ones with trigger type 'scalar' and continuation type 'cancelation'are ruled out, as they cause logical contradiction.


#### Factor combination

| Code | Context  | Trigger  | Continuation |
| :--: | :------- | :------- | :----------- |
| A    | full     | scalar   | complement   |
| B    | full     | scalar   | cancelation  |
| C    | full     | focused  | complement   |
| D    | partial  | scalar   | complement   |
| E    | partial  | scalar   | cancelation  |
| F    | partial  | focused  | complement   |

We use a latin square to make sure that the frequency of matches between factor combination and situation are balanced out across participants. we place 6 permunations of the combinations above in a row, making a square in which no combination is in the same position within a row more than once. And then a random permutation of 4 rows is chosen, from the 6 rows in the latin square, yielding a list of 24 factor combinations.

#### latin square:

  C E D B A F  
  D C A E F B  
  A B F D E C  
  E D C F B A  
  F A B C D E  
  B F E A C D  

  #### example of chosen rows 

  C E D B A F / D C A E F B / A B F D E C / F A B C D E

### comprehension question 

Comprehension questions test the participant's understanding of the situation after each . Each question is  in one of the following format, and the correct answer to each format varies systematically by continuation sentence type.

|question type|correct answer if 'complement'|correct answer if 'cancelation|
|-|-|-|
| existential quantifier | yes | yes
| negated existential quantifier | yes | no
| universal quantifier | no | yes 
| negated universal quantifier | no | no

### example
```javascript
{
      ID: 1,
      context: {
        full: `I carefully inspected | the new | shipment of jewelry.`,
        partial: `I helped unload | the new | shipment of jewelry.`
      },
      trigger: {
        scalar: `Some of | the gold | watches were | fakes.`,
        focused: `Only | some of | the gold | watches were | fakes.`
      },
      continuation: {
        complement: `The rest | were real, | but the | company is still | planning | to sue.`,
        cancelation: `In fact, | they all | were, | so the | company is | planning | to sue.`
      },
      question: `Did the new shipment of jewelery contain gold watches that were fake?`,
      question_type: "existential"
      
      //question: `Did the new shipment of jewelery contain gold watches that were real?`,
      //question_type: "negated_existential"
      //question: `Were all the gold watches in the shipment of jewelry were fake?`,
      //question_type: "universal"
      //question: `Were all the gold watches in the shipment of jewelry were real?`,
      //question_type: "negated_universal"
    }
    
```
- context type sentence: 'carefully inspecting' the shipment sets the context that the speaker has full knowledge of the situation, while 'helping unload' shipment sets the context that the speaker has partial knowledge of the situation.
- trigger type sentence: 'some of the gold watches' triggers participant to make a strong or weak implicature, while 'only some of the gold watches' collapses the strong implicature 'some but not all' to an explicit truth.
- conituation type sentence : 'The rest were' complements the meaning of strong implicature 'only some of all' ,while 'they all were' cancels the meaning of strong implicature.
- comprehension question(universal quantifier): If continuation sentence type is 'complement', then the correct answer is 'no'. If 'cancelation', the correct answer is 'yes'.

## filler trials
We also have 10 Filler trials, which have self paced reading sentences and comprehension question in free format, unlike in real trials. These make sure the participant do not get used to the format of the real trials as the trials proceed.


# Procedure

## preparation
- Since this is an web experiment, the participant is prompted to answer a captcha question. If they get the answer wrong 3 times, experiment cannot be proceeded.
- The participant is shown the instruction for the experiment.

## practice trials
- 3 practice sentences such as "Would you like to see another example?" are shown in self paced reading format, If the participant presses "yes", then the screen moves onto the practice sentence. If the participant presses "no", then the screen skips to the main trials.

## main trials
34 main trials are created by randomly mixing 24 real trials and 10 filler. In each main trial, the three sentences are presented in blocks of phrases hidden by underlines. The participant presses the spacebar in order to reveal the phrases one by one. In the meanwhile, the intervals of the pressing are recorded. The participant's answer to the comprehension question is also recorded.

## personal information
Participant can optionally submit their age, gender and education level.

# Independent variable

## within-participant: (2x2x2 factorial design)
context type: full speaker knowledge vs 
partial speaker knowledge

### Trigger-type 
scalar (‘some’): can lead either to strong implicature 'some but not all' or weak implicature 'some and maybe all'  
vs   
focused('only some'): collapses the strong implicature 'some but not all' to an explicit truth. 

### Continuation-type

complement(‘some but not all’): expected by strong implicature or focused trigger  
vs   
cancelation ‘all’: only weak implicature preserves this possibility
		
## Between-participant:
factor combinations associated with each trial, balanced out using the latin square 

# Dependent variable:
reaction time at trigger sentence
reacton time at continuation sentence


# Hypotheses

<ol>

<li>

When context sentence implies that the speaker has full knowledge, compared to when partial-knowledge is implied, given trigger type is scalar trigger, a longer reaction time is observed at the trigger sentence . 

(Explanation: strong implicature conveys stronger information so requires longer time to process) 
(Result: True)
<li>

When the context sentence implies that the speaker has full knowledge, compared to partial knowledge, after a scalar trigger, a shorter reaction time is observed at the contiuation sentence of complement type. 

(Explanation: With strong implicature, compared to weak implicature, complement is more strongly expected )

(Result: True - no difference at anaphor exactly, but sufficient difference at predicate where anaphor is disambiguated)

<li>

When the context sentence implies that the speaker has full knowledge, compared to partial knowledge, after a scalar trigger, a longer reaction time is observed at the contiuation sentence of cancelation type. 

(Explanation: With strong implicature, compared to weak implicature, complement is more strongly expected, and cancelation is less strongly)

(Result: True - no difference at anaphor exactly, but sufficient difference at predicate where anaphor is disambiguated)

<li>

After a focused trigger, the same reaction time at trigger  sentence is observed whether context sentence implies full knowledge or partial knowledge.

(Explanation: focused trigger leaves no room for implicature and therefore also no room for difference between strong and weak implicature)

(Result: True)

<li>

After a focused trigger, the same reaction time at complement sentence is observed whether context sentence implies full knowledge or partial knowledge.

(Explanation: focused trigger leaves no room for implicature and therefore also no room for difference between strong and weak implicature)

(Result: True)

# improvements from last study 

In the practic trials, the screen does not skip to the main trials even if the participant answers "no" to the offer to see another practice sentence.In this version, the participant is taken dirrectly to the main trial in this case.

the answers to questions with universal quantifier vary by complement type. But in the previous version,  correct answer was uniformly assigned, which was false. The variation is taken into account in this project, making sure comprehension can be better evaluated.








