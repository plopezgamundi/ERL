/********************** 
 * Erl_Online_V7 Test *
 **********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'erl_online_v7';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instruct_neg1_routineRoutineBegin());
flowScheduler.add(Instruct_neg1_routineRoutineEachFrame());
flowScheduler.add(Instruct_neg1_routineRoutineEnd());
const like_rate_loop_initialLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(like_rate_loop_initialLoopBegin(like_rate_loop_initialLoopScheduler));
flowScheduler.add(like_rate_loop_initialLoopScheduler);
flowScheduler.add(like_rate_loop_initialLoopEnd);
const like_rate_rewStim_loop_initialLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(like_rate_rewStim_loop_initialLoopBegin(like_rate_rewStim_loop_initialLoopScheduler));
flowScheduler.add(like_rate_rewStim_loop_initialLoopScheduler);
flowScheduler.add(like_rate_rewStim_loop_initialLoopEnd);
flowScheduler.add(Instruct0_routineRoutineBegin());
flowScheduler.add(Instruct0_routineRoutineEachFrame());
flowScheduler.add(Instruct0_routineRoutineEnd());
flowScheduler.add(Instruct1_routineRoutineBegin());
flowScheduler.add(Instruct1_routineRoutineEachFrame());
flowScheduler.add(Instruct1_routineRoutineEnd());
const easy_task_ex_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(easy_task_ex_loopLoopBegin(easy_task_ex_loopLoopScheduler));
flowScheduler.add(easy_task_ex_loopLoopScheduler);
flowScheduler.add(easy_task_ex_loopLoopEnd);
flowScheduler.add(Instruct2_routineRoutineBegin());
flowScheduler.add(Instruct2_routineRoutineEachFrame());
flowScheduler.add(Instruct2_routineRoutineEnd());
const hard_task_ex_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(hard_task_ex_loopLoopBegin(hard_task_ex_loopLoopScheduler));
flowScheduler.add(hard_task_ex_loopLoopScheduler);
flowScheduler.add(hard_task_ex_loopLoopEnd);
flowScheduler.add(Instruct3_routineRoutineBegin());
flowScheduler.add(Instruct3_routineRoutineEachFrame());
flowScheduler.add(Instruct3_routineRoutineEnd());
flowScheduler.add(Instruct4_routineRoutineBegin());
flowScheduler.add(Instruct4_routineRoutineEachFrame());
flowScheduler.add(Instruct4_routineRoutineEnd());
flowScheduler.add(Instruct5_routineRoutineBegin());
flowScheduler.add(Instruct5_routineRoutineEachFrame());
flowScheduler.add(Instruct5_routineRoutineEnd());
flowScheduler.add(start_Train_RoutineRoutineBegin());
flowScheduler.add(start_Train_RoutineRoutineEachFrame());
flowScheduler.add(start_Train_RoutineRoutineEnd());
const Cali_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Cali_loopLoopBegin(Cali_loopLoopScheduler));
flowScheduler.add(Cali_loopLoopScheduler);
flowScheduler.add(Cali_loopLoopEnd);
flowScheduler.add(endCaliRoutineBegin());
flowScheduler.add(endCaliRoutineEachFrame());
flowScheduler.add(endCaliRoutineEnd());
const effort_rate_baseLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(effort_rate_baseLoopBegin(effort_rate_baseLoopScheduler));
flowScheduler.add(effort_rate_baseLoopScheduler);
flowScheduler.add(effort_rate_baseLoopEnd);
const prob_rate_baseLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prob_rate_baseLoopBegin(prob_rate_baseLoopScheduler));
flowScheduler.add(prob_rate_baseLoopScheduler);
flowScheduler.add(prob_rate_baseLoopEnd);
const like_rate_baseLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(like_rate_baseLoopBegin(like_rate_baseLoopScheduler));
flowScheduler.add(like_rate_baseLoopScheduler);
flowScheduler.add(like_rate_baseLoopEnd);
flowScheduler.add(start_PRLRoutineBegin());
flowScheduler.add(start_PRLRoutineEachFrame());
flowScheduler.add(start_PRLRoutineEnd());
flowScheduler.add(start_PRL1RoutineBegin());
flowScheduler.add(start_PRL1RoutineEachFrame());
flowScheduler.add(start_PRL1RoutineEnd());
flowScheduler.add(start_PRL1_1RoutineBegin());
flowScheduler.add(start_PRL1_1RoutineEachFrame());
flowScheduler.add(start_PRL1_1RoutineEnd());
flowScheduler.add(start_PRL_2RoutineBegin());
flowScheduler.add(start_PRL_2RoutineEachFrame());
flowScheduler.add(start_PRL_2RoutineEnd());
const Block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Block_loopLoopBegin(Block_loopLoopScheduler));
flowScheduler.add(Block_loopLoopScheduler);
flowScheduler.add(Block_loopLoopEnd);
flowScheduler.add(exit_exp_routineRoutineBegin());
flowScheduler.add(exit_exp_routineRoutineEachFrame());
flowScheduler.add(exit_exp_routineRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stim/triangle.png', 'path': 'stim/triangle.png'},
    {'name': 'stim/easy_blue_circ.png', 'path': 'stim/easy_blue_circ.png'},
    {'name': 'stim/star.png', 'path': 'stim/star.png'},
    {'name': 'stim/hard_circ.png', 'path': 'stim/hard_circ.png'},
    {'name': 'ex_tasques.xlsx', 'path': 'ex_tasques.xlsx'},
    {'name': 'stim/inst_image_cues.png', 'path': 'stim/inst_image_cues.png'},
    {'name': 'stim/inst_rew_cues.png', 'path': 'stim/inst_rew_cues.png'},
    {'name': 'stim/square.png', 'path': 'stim/square.png'},
    {'name': 'stim/check_mark.png', 'path': 'stim/check_mark.png'},
    {'name': 'stim/x_mark.png', 'path': 'stim/x_mark.png'},
    {'name': 'stim/hexagon.png', 'path': 'stim/hexagon.png'},
    {'name': 'tasques.xlsx', 'path': 'tasques.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=C17FX0UQ', '');

  return Scheduler.Event.NEXT;
}


var Instruct_neg1_routineClock;
var Instruct;
var instructneg1_resp;
var like_rateClock;
var like_rate_text;
var initial_like;
var likeImage;
var like_rate_track;
var like_rate_slider;
var like_rate_image;
var like_rate_rewStimClock;
var like_rate_rewStim_text;
var base_like_rewStim;
var like_rate_track_rewStim;
var cue_array;
var low_eff_cue1;
var low_eff_cue2;
var high_eff_cue1;
var high_eff_cue2;
var likeImage_rewStim;
var rewStim_array;
var rewStimLabel_array;
var like_rate_rewStim_slider;
var like_rate_rewStim_image;
var Instruct0_routineClock;
var Instruct_0;
var instruct0_resp;
var Instruct1_routineClock;
var Instruct1_text;
var Instruct1_key_resp;
var Easy_Task_exampleClock;
var easy_task_ex_text;
var easy_task_ex_key_resp;
var easy_task_ex_labels;
var fix_easy_exClock;
var easy_task_ex_labes1;
var Instruct2_routineClock;
var Instruct2_text;
var Instruct2_key_resp;
var Hard_Task_exampleClock;
var Hard_task_ex_labels;
var Hard_task_ex_number;
var hard_key_resp;
var hard_task_exClock;
var fix_hard_labl_1;
var Instruct3_routineClock;
var Instruct3_text;
var Instruct3_key_resp;
var Instruct4_routineClock;
var Instruct4_text;
var Instruct4_image;
var Instruct4_key_resp;
var Instruct5_routineClock;
var Instruct5_text;
var Instruct5_key_resp;
var start_Train_RoutineClock;
var start_train_text;
var start_train_resp;
var CueCalClock;
var nbl;
var cutEasy;
var cutHard;
var nEasy;
var nEasyCorr;
var nHard;
var nHardCorr;
var respEasy;
var respHard;
var subtasks;
var A;
var B;
var allcond;
var trthr;
var cueCal;
var cal_i;
var CueCalibrationImage;
var TrainCueFix;
var trialClock;
var numbersCal;
var key_resp;
var fix_numClock;
var fix_num_blank;
var feedbackClock;
var MRT;
var Feedback;
var accuracyEasy;
var accuracyHard;
var thisTR;
var points;
var thr_rt;
var thr_ncc;
var PCTCOR;
var idx;
var rts;
var cali_fb_text;
var fix_cali_fb;
var endCaliClock;
var text;
var endCali_resp;
var effort_rateClock;
var base_effort;
var effImage;
var effort_rate_track;
var effort_rate_slider;
var effort_rate_text;
var eff_rate_image;
var prob_rateClock;
var prob_rate_slider;
var prob_rate_image;
var prob_rate_text;
var base_prob;
var probImage;
var prob_rate_track;
var like_rate_2Clock;
var like_rate_text_2;
var base_like;
var likeImage2;
var like_rate_slider_2;
var like_rate_image_2;
var start_PRLClock;
var start_PRL_text;
var start_PRL_resp;
var start_PRL_image;
var start_PRL1Clock;
var start_PRL1_text;
var startPRL1_key_resp;
var ex_triangle;
var ex_triangle_rew;
var ex_star;
var ex_star_rew;
var start_PRL1_1Clock;
var start_PRL_1_1_key_resp;
var startPRL1_1_text;
var start_PRL_2Clock;
var start_PRL2_text;
var start_PRL2_key_resp;
var startRLblockClock;
var moreRew_prob12;
var moreRew_prob12_desc;
var lessRew_prob12;
var lessRew_prob12_desc;
var moreRew_prob13;
var moreRew_prob13_desc;
var lessRew_prob13;
var lessRew_prob13_desc;
var moreRew_prob14;
var moreRew_prob14_desc;
var lessRew_prob14;
var lessRew_prob14_desc;
var moreRew_prob15;
var moreRew_prob15_desc;
var lessRew_prob15;
var lessRew_prob15_desc;
var moreRew_prob16;
var moreRew_prob16_desc;
var lessRew_prob16;
var lessRew_prob16_desc;
var moreRew_prob17;
var moreRew_prob17_desc;
var lessRew_prob17;
var lessRew_prob17_desc;
var moreRew_prob18;
var moreRew_prob18_desc;
var lessRew_prob18;
var lessRew_prob18_desc;
var moreRew_last15;
var moreRew_last15_desc;
var lessRew_last15_1;
var lessRew_last15_2;
var lessRew_last15;
var lessRew_last15_desc;
var prob_array;
var block_array_arr;
var t;
var block_array;
var block_i;
var trial_counter;
var skipRL;
var catch_on;
var probDist1;
var probDist2;
var probDist1_desc;
var probDist2_desc;
var prob_dist;
var r_arr;
var effCal;
var start_block_text;
var all_trial_counter;
var new_block_text;
var new_block_key_resp;
var image;
var catch_fix_2Clock;
var catch_fix_2_text;
var catch_trial_imageClock;
var catch_image;
var catch_track;
var catch_track_block;
var catch_fix;
var catch_trial_question;
var CatchCue1;
var CatchCue2;
var catch_key_resp;
var RL_choiceClock;
var cuepos;
var RewCue1_pos;
var RewCue2_pos;
var rl_choice;
var rl_outcome;
var effortRew_loop;
var faster_loop;
var choice_a;
var selected_cue;
var reversal_trial;
var subBlockTrial;
var he_choice_after_rev;
var RL_key_resp;
var RewCue1;
var RewCue2;
var RL_choice_fix;
var Faster_routineClock;
var faster_choice_text;
var iti_fix2Clock;
var iti_fix_text;
var effTrialClock;
var col;
var effTask_number;
var effTask_resp;
var fix_num_2Clock;
var fix_num_blank_2;
var effFeedbackClock;
var fbImage;
var effFeedback_image;
var effFeedback_fix;
var RL_feedbackClock;
var selected_cue_image;
var rl_feedback_text;
var endBlockClock;
var endBlock_text;
var end_block_key_resp;
var effort_rate_blockClock;
var block_loop;
var block_effort;
var effort_rate_slider_2;
var effort_rate_text_2;
var eff_rate_image_2;
var prob_rate_blockClock;
var prob_rate_slider_2;
var prob_rate_image_2;
var prob_rate_text_2;
var block_prob;
var like_rate_blockClock;
var like_rate_text_3;
var block_like;
var like_rate_slider_3;
var like_rate_image_3;
var like_rate_rewStim_blockClock;
var like_rate_rewStim_text_2;
var block_like_rewStim;
var stim_block_loop;
var like_rate_rewStim_slider_2;
var like_rate_rewStim_image_2;
var exit_exp_routineClock;
var exit_text;
var exit_key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instruct_neg1_routine"
  Instruct_neg1_routineClock = new util.Clock();
  Instruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruct',
    text: "Welcome to our experiment!\n\nBefore we start explaining the task, we have a few basic questions we would like for you to answer.\n\nThen, we'll explain the experiment and go through a training before reaching the final portion of the task.\n\nPress the space bar to continue to the initial questions.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instructneg1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "like_rate"
  like_rateClock = new util.Clock();
  like_rate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'like_rate_text',
    text: 'How much do you like this image?\nUse the mouse to indicate on the line how much you liked the image.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from like_rate_code
  initial_like = 1;
  likeImage = "stim/easy_blue_circ.png";
  like_rate_track = 1;
  
  like_rate_slider = new visual.Slider({
    win: psychoJS.window, name: 'like_rate_slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["Do not like at all", "", "", "", "", "Indifferent", "", "", "", "", "Like very much"], fontSize: 0.03, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  like_rate_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'like_rate_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.01)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "like_rate_rewStim"
  like_rate_rewStimClock = new util.Clock();
  like_rate_rewStim_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'like_rate_rewStim_text',
    text: 'How much do you like this image?\nUse the mouse to indicate on the line how much you liked the image.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from like_rate_rewStim_code
  base_like_rewStim = 1;
  like_rate_track_rewStim = 1;
  cue_array = ["stim/hexagon.png", "stim/square.png", "stim/triangle.png", "stim/star.png"];
  util.shuffle(cue_array);
  low_eff_cue1 = cue_array[0];
  low_eff_cue2 = cue_array[1];
  high_eff_cue1 = cue_array[2];
  high_eff_cue2 = cue_array[3];
  likeImage_rewStim = cue_array[0];
  rewStim_array = cue_array;
  rewStimLabel_array = ["LowEffort_cue1", "LowEffort_cue2", "HighEffort_cue1", "HighEffort_cue2"];
  
  like_rate_rewStim_slider = new visual.Slider({
    win: psychoJS.window, name: 'like_rate_rewStim_slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["Do not like at all", "", "", "", "", "Indifferent", "", "", "", "", "Like very much"], fontSize: 0.03, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  like_rate_rewStim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'like_rate_rewStim_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.01)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "Instruct0_routine"
  Instruct0_routineClock = new util.Clock();
  Instruct_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruct_0',
    text: 'Welcome to our experiment!\n\nThe goal of this task is to learn how to play a number game and then play to win money. Specifically, the task is composed of two phases:\n\nIn the first phase, you will learn how to play two different number games. If you play them correctly, you can win points.\n\nIn the second phase, you will continue to play this number game. However you will then need to also select between two shapes in order to win even more points. These points are then converted into a bonus payment. So the more points you accumulate throughout the task, the larger your bonus.\n\nPress the space bar to continue to the next slide.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruct0_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruct1_routine"
  Instruct1_routineClock = new util.Clock();
  Instruct1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruct1_text',
    text: 'Ok, so what is this numbers gaime? In the game you will be presented a series of numbers one at a time for 6 seconds. You will need to make as many value judgements as possible within this 6-second window.\n\nThe type of value judgement you will make depends on the color of the number. Specifically, if the number is blue, you will need to decide if the number is less than or greater than 5 (note, you will never be presented with a 5). Press 1 if the number is LESS THAN 5 and 2 if the number is GREATER THAN 5.\n\nAlso note that you will not receive any indication that you have answered incorrectly. If you respond incorrectly to a number, it will simply pass on to the next number in the series.\n\nPress the space bar to see an example.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instruct1_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Easy_Task_example"
  Easy_Task_exampleClock = new util.Clock();
  easy_task_ex_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'easy_task_ex_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: 0.0 
  });
  
  easy_task_ex_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  easy_task_ex_labels = new visual.TextStim({
    win: psychoJS.window,
    name: 'easy_task_ex_labels',
    text: 'LESS THAN 5  =  Press 1\nGREATER THAN 5   =  Press 2 ',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "fix_easy_ex"
  fix_easy_exClock = new util.Clock();
  easy_task_ex_labes1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'easy_task_ex_labes1',
    text: 'LESS THAN 5  =  Press 1\nGREATER THAN 5   =  Press 2 ',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Instruct2_routine"
  Instruct2_routineClock = new util.Clock();
  Instruct2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruct2_text',
    text: 'In some trials, all the numbers will be blue, but in other trials the numbers will alternate between blue and yellow. When you see a blue number, you still have to decide if the number is less than or greater than 5.\n\nHowever, when you see a YELLOW number, you will need to decide if the number is even or odd. Press 1 if the number is ODD and 2 if the number is EVEN.\n\nPress the space bar for an example of a trial with both blue and yellow numbers.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instruct2_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Hard_Task_example"
  Hard_Task_exampleClock = new util.Clock();
  Hard_task_ex_labels = new visual.TextStim({
    win: psychoJS.window,
    name: 'Hard_task_ex_labels',
    text: 'Blue Number: Less than 5 = Press 1 and Greater than 5 = Press 2\nYellow Number: ODD = Press 1 and EVEN = Press 2\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Hard_task_ex_number = new visual.TextStim({
    win: psychoJS.window,
    name: 'Hard_task_ex_number',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  hard_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "hard_task_ex"
  hard_task_exClock = new util.Clock();
  fix_hard_labl_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_hard_labl_1',
    text: 'Blue Number: Less than 5 = Press 1 and Greater than 5 = Press 2\nYellow Number: ODD = Press 1 and EVEN = Press 2\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Instruct3_routine"
  Instruct3_routineClock = new util.Clock();
  Instruct3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruct3_text',
    text: 'Next, we will practice the games several times so that you are very warmed up to play in the second part of the experiment.\n\nEvery time you correctly complete a practice trial you will win 2 points. The more points you gain throughout the experiment, the larger your bonus payment. Remember that you get 0.50 pounds for making 150 points, 1.00 pounds for making 250 points, 1.50 for making 350 points, and so on. Thus, it is very important that you pay attention in the practice since you can make a lot of points just on this part of the experiment.\n\nPress space bar to move on to the next instructions.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instruct3_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruct4_routine"
  Instruct4_routineClock = new util.Clock();
  Instruct4_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruct4_text',
    text: 'Before each trial you will see a circle. The color of the circle indicates what kind of game you will need to practice. If the circle is fully blue, then you will play the game with only blue numbers. If the circle is blue and yellow, then you will play the game with both blue and yellow numbers.\n\n\n\n\n\n\n\n\n\n\nPress the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instruct4_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruct4_image', units : undefined, 
    image : 'stim/inst_image_cues.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.08)], size : [0.55, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  Instruct4_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruct5_routine"
  Instruct5_routineClock = new util.Clock();
  Instruct5_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruct5_text',
    text: 'We will now begin the practice. You will not be told explicitly the amount of correct decisions you need to make within the 6-second time window for the trial to be correct. However, you will notice that if you make too many errors or do not respond enough times within the 6-second window, you will not win any points and you will move on the next trial. If you do it correctly, however, you will win 2 points for each trial!\n\nPress the space bar to move on.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instruct5_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start_Train_Routine"
  start_Train_RoutineClock = new util.Clock();
  start_train_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_train_text',
    text: 'Note that in the example before, we included reminders of the rules of the game. However, in the practice and in the actual task, you won’t have these reminders. So please take a second to look over the rules again:\n\nBlue Number: Less than 5 = Press 1 and Greater than 5 = Press 2\nYellow Number: ODD = Press 1 and  EVEN = Press 2.\n\nPress space bar to move on to the practice rounds.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_train_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CueCal"
  CueCalClock = new util.Clock();
  // Run 'Begin Experiment' code from TrainCueCode
          // add-on: list(s: string): string[]
          function list(s) {
              // if s is a string, we return a list of its characters
              if (typeof s === 'string')
                  return s.split('');
              else
                  // otherwise we return s:
                  return s;
          }
  nbl = 0;
  cutEasy = [4, 100];
  cutHard = [3, 100];
  nEasy = 0;
  nEasyCorr = 0;
  nHard = 0;
  nHardCorr = 0;
  respEasy = [];
  respHard = [];
  subtasks = [1, 2];
  A = list(util.range(0, 20));
  B = list(util.range(0, 2));
  allcond = [];
  for (var x, _pj_c = 0, _pj_a = A, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      x = _pj_a[_pj_c];
      for (var y, _pj_f = 0, _pj_d = B, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
          y = _pj_d[_pj_f];
          allcond.push((B[y] + 1));
      }
  }
  util.shuffle(allcond);
  trthr = 5;
  
  
  cueCal='stim/easy_yellow_circ.png'
  
  
  cal_i=1;
  CueCalibrationImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CueCalibrationImage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  TrainCueFix = new visual.TextStim({
    win: psychoJS.window,
    name: 'TrainCueFix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  numbersCal = new visual.TextStim({
    win: psychoJS.window,
    name: 'numbersCal',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix_num"
  fix_numClock = new util.Clock();
  fix_num_blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_num_blank',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from feedback_code
  MRT = 0;
  Feedback = 0;
  accuracyEasy = [];
  accuracyHard = [];
  thisTR = [];
  points = 0;
  thr_rt = 0;
  thr_ncc = 0;
  A = [];
  PCTCOR = 0;
  idx = [];
  rts = [];
  
  cali_fb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cali_fb_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  fix_cali_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cali_fb',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "endCali"
  endCaliClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  endCali_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "effort_rate"
  effort_rateClock = new util.Clock();
  // Run 'Begin Experiment' code from effort_rate_code
  base_effort = 1;
  effImage = "stim/easy_blue_circ.png";
  effort_rate_track = 1;
  
  effort_rate_slider = new visual.Slider({
    win: psychoJS.window, name: 'effort_rate_slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["Not effortful at all", "", "", "", "", "Somewhat effortful", "", "", "", "", "Extremely effortful"], fontSize: 0.03, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  effort_rate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'effort_rate_text',
    text: 'Independently of how likely you were to win the points, how effortful was this task? \nUse the mouse to indicate on the line how effortful you felt the task was.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  eff_rate_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'eff_rate_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.01)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "prob_rate"
  prob_rateClock = new util.Clock();
  prob_rate_slider = new visual.Slider({
    win: psychoJS.window, name: 'prob_rate_slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["0% likely to win", "50%", "100% likely to win"], fontSize: 0.03, ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  prob_rate_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prob_rate_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.01)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  prob_rate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prob_rate_text',
    text: 'Independently of how mentally demanding the task is, how likely do you feel you are to win the points if you play this game?\nUse the mouse to indicate your estimated probability of success. Please note that you can click between the tick marks as well.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Run 'Begin Experiment' code from prob_rate_code
  base_prob = 1;
  probImage = "stim/easy_blue_circ.png";
  prob_rate_track = 1;
  
  // Initialize components for Routine "like_rate_2"
  like_rate_2Clock = new util.Clock();
  like_rate_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'like_rate_text_2',
    text: 'How much do you like this image?\nUse the mouse to indicate on the line how much you liked the image.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from like_rate_code_2
  base_like = 1;
  likeImage2 = "stim/easy_blue_circ.png";
  like_rate_track = 1;
  
  like_rate_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'like_rate_slider_2',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["Do not like at all", "", "", "", "", "Indifferent", "", "", "", "", "Like very much"], fontSize: 0.03, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  like_rate_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'like_rate_image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.01)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "start_PRL"
  start_PRLClock = new util.Clock();
  start_PRL_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_PRL_text',
    text: ("You will now begin the second portion of the task.\n\nIn this portion, you will first be presented with TWO of the following shapes.\n\n\n\n\n\n\n\n" + "You will have 5 seconds to select a shape (press 1 for the shape on the left and 2 for the shape on the right). If you do not make a selection in the 5 seconds, you will miss your opportunity to win points and will pass directly to the next trial.\n\nPress SPACE for more instructions."),
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_PRL_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  start_PRL_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'start_PRL_image', units : undefined, 
    image : 'stim/inst_rew_cues.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.55, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "start_PRL1"
  start_PRL1Clock = new util.Clock();
  start_PRL1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_PRL1_text',
    text: ("After making a selection, you will play the number game of either one or two colors. \n\nLike before, if you do not correctly complete the game, you will not have the opportunity to win points. Instead, you will see a thumbs down and then the shape you selected along with a number in RED. The red number is the number of points you *could have* won had you correctly completed the game. However, if you play the game correctly, you will then be presented with a thumbs up, followed by the shape you previously selected and the number of points you won in GREEN. \n\nFor example, the image on the left means you selected the triangle and you could have won 5 points had you correctly completed the game. The image on the right means you selected the star and, even though you correctly completed the game, you didn't win any points." + "\n\n\n\n\n\n\n\n\n\n\n\nPress the SPACE bar to continue."),
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  startPRL1_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ex_triangle = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex_triangle', units : undefined, 
    image : 'stim/triangle.png', mask : undefined,
    ori : 0.0, pos : [(- 0.2), (- 0.2)], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  ex_triangle_rew = new visual.TextStim({
    win: psychoJS.window,
    name: 'ex_triangle_rew',
    text: '5',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -3.0 
  });
  
  ex_star = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex_star', units : undefined, 
    image : 'stim/star.png', mask : undefined,
    ori : 0.0, pos : [0.2, (- 0.2)], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  ex_star_rew = new visual.TextStim({
    win: psychoJS.window,
    name: 'ex_star_rew',
    text: '0',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('green'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "start_PRL1_1"
  start_PRL1_1Clock = new util.Clock();
  start_PRL_1_1_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  startPRL1_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'startPRL1_1_text',
    text: (("One of the shapes is more likely to give you points than the other shape. You have to try to choose the more rewarding shape in each trial. On some trials, you will not win points, even if you chose the more rewarding shape. Your task is to stick to the shape that gives you more points so that you can maximize your bonus payment. Sometimes the rule may change so that the other shape leads to more reward. You then have to follow this new rule and choose the other shape so that, in general, you still get as many points as possible over the whole of the task. It is important that you only start choosing the other shape when you are sure that the rule has changed!!! The rule will change several times, but there is no way of predicting when it will change. The same two shapes will be presented for each block of the task. Try to respond as quickly as you can.\n\n" + "Remember, the amount of points you win depends on BOTH how well you select the shapes AND how well you play the game, so please pay attention to which shape gives you more reward!\n\n") + "Please press SPACE to continue."),
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "start_PRL_2"
  start_PRL_2Clock = new util.Clock();
  start_PRL2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_PRL2_text',
    text: (((("Please note that if you skip too many of the shape offers (more than 10%), you will not be rewarded the bonus, so be careful! Occasionally there will also be some simple attention checks. Failing too many of the attention checks could also affect bonus payments." + "\n\n Remember that you get 0.50 pounds for making 150 points, 1.00 pounds for making 250 points, 1.50 for making 350 points, and so on.") + "\n\nPress 1 to choose the shape on the left") + "\n Press 2 to choose the shape on the right") + "\n\n\n\n Press SPACE to start the task."),
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_PRL2_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "startRLblock"
  startRLblockClock = new util.Clock();
  // Run 'Begin Experiment' code from RL_block_code
  moreRew_prob12=[1,1,1,1,1,1,1,1,1,0,0,0];
  moreRew_prob12_desc=["highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP"];
  lessRew_prob12=[0,0,0,0,0,0,0,0,0,1,1,1];
  lessRew_prob12_desc=["lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP"];
  util.shuffle(moreRew_prob12);
  util.shuffle(lessRew_prob12);
  moreRew_prob13 = [1,1,1,1,1,1,1,1,1,1,0,0,0];
  moreRew_prob13_desc = ["highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP"];
  lessRew_prob13 = [0,0,0,0,0,0,0,0,0,0,1,1,1];
  lessRew_prob13_desc = ["lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP"];
  util.shuffle(moreRew_prob13);
  util.shuffle(lessRew_prob13);
  moreRew_prob14 = [1,1,1,1,1,1,1,1,1,1,1,0,0,0];
  moreRew_prob14_desc = ["highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP"];
  lessRew_prob14 = [0,0,0,0,0,0,0,0,0,0,0,1,1,1];
  lessRew_prob14_desc = ["lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP"];
  util.shuffle(moreRew_prob14);
  util.shuffle(lessRew_prob14);
  moreRew_prob15 = [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];
  moreRew_prob15_desc = ["highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP"];
  lessRew_prob15 = [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1];
  lessRew_prob15_desc = ["lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP"];
  util.shuffle(moreRew_prob15);
  util.shuffle(lessRew_prob15);
  moreRew_prob16 = [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];
  moreRew_prob16_desc = ["highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP"];
  lessRew_prob16 = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1];
  lessRew_prob16_desc = ["lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP"];
  util.shuffle(moreRew_prob16);
  util.shuffle(lessRew_prob16);
  moreRew_prob17 = [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];
  moreRew_prob17_desc = ["highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP"];
  lessRew_prob17 = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1];
  lessRew_prob17_desc = ["lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP"];
  util.shuffle(moreRew_prob17);
  util.shuffle(lessRew_prob17);
  moreRew_prob18 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];
  moreRew_prob18_desc = ["highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP"];
  
  lessRew_prob18 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1];
  lessRew_prob18_desc = ["lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP"];
  util.shuffle(moreRew_prob18);
  util.shuffle(lessRew_prob18);
  
  moreRew_last15=[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]
  util.shuffle(moreRew_last15)
  moreRew_last15_desc=["highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP","highRewP", "highRewP", "highRewP", "highRewP"];
  
  lessRew_last15_1=[0,0,0,0,0];
  lessRew_last15_2=[1,1,1,0,0,0,0,0,0,0];
  util.shuffle(lessRew_last15_2);
  lessRew_last15=lessRew_last15_1.concat(lessRew_last15_2);
  lessRew_last15_desc=["lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP","lowRewP", "lowRewP", "lowRewP", "lowRewP"];
  
  
  prob_array = ["12/18","13/17","14/16","15/15","16/14","17/13","18/12"];
  util.shuffle(prob_array);
  
  //moved this to the rewStim like rating routine
  //cue_array = ["stim/orange_stim.png","stim/watermelon_stim.png","stim/lemon_stim.png","stim/peach_stim.png"];
  //util.shuffle(cue_array);
  //low_eff_cue1 = cue_array[0];
  //low_eff_cue2 = cue_array[1];
  //high_eff_cue1 = cue_array[2];
  //high_eff_cue2 = cue_array[3];
  
  
  block_array_arr=[["hard", "easy"], ["easy", "hard"], ["hard", "easy"], ["easy", "hard"]];
  t=[0,1,2,3];
  util.shuffle(t);
  block_array=block_array_arr[t[0]];
  
  block_i = 0;
  trial_counter = 0;
  skipRL = 0;
  catch_on=0
  probDist1=[];
  probDist2=[];
  probDist1_desc=[];
  probDist2_desc=[];
  prob_dist="none";
  r_arr=[];
  
  if (block_array[block_i]=="easy") {
      effCal='stim\easy_blue_circ.png';
      start_block_text="In this block, you will play the game with only blue numbers.\n\n\n\n\n\n\n\n\nPress the space bar when you are ready to start.";
  } else {
      effCal='stim\hard_circ.png';
      start_block_text="In this block, you will play the game with both blue and yellow numbers.\n\n\n\n\n\n\n\n\nPress the space bar when you are ready to start.";
  }
  
  console.log("block_i:   ", block_i.toString());
  console.log("block_array:    ", block_array.toString());
  
  all_trial_counter=0;
  new_block_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'new_block_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  new_block_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "catch_fix_2"
  catch_fix_2Clock = new util.Clock();
  catch_fix_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch_fix_2_text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "catch_trial_image"
  catch_trial_imageClock = new util.Clock();
  catch_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'catch_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Run 'Begin Experiment' code from code
  catch_track = 0;
  catch_track_block = 0;
  
  catch_fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch_fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  catch_trial_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'catch_trial_question',
    text: 'Which image did you see?\n\n\n\n\n\n\n\n\n\nPress 1 if it was the image on the left. Press 2 if it was the image on the right.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  CatchCue1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CatchCue1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.2), 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  CatchCue2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CatchCue2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.2, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  catch_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RL_choice"
  RL_choiceClock = new util.Clock();
  // Run 'Begin Experiment' code from ShuffleCues_code
  cuepos = [1, 2];
  RewCue1_pos = [0, 0];
  RewCue2_pos = [0, 0];
  
  rl_choice="none";
  rl_outcome = 0;
  effortRew_loop=0;
  faster_loop = 0;
  choice_a=0;
  selected_cue="none";
  
  reversal_trial=0;
  subBlockTrial=1;
  he_choice_after_rev=0;
  RL_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  RewCue1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RewCue1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  RewCue2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RewCue2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  RL_choice_fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'RL_choice_fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Faster_routine"
  Faster_routineClock = new util.Clock();
  faster_choice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'faster_choice_text',
    text: 'Choose faster!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "iti_fix2"
  iti_fix2Clock = new util.Clock();
  iti_fix_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti_fix_text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "effTrial"
  effTrialClock = new util.Clock();
  // Run 'Begin Experiment' code from effTask_code
  col = "white";
  
  effTask_number = new visual.TextStim({
    win: psychoJS.window,
    name: 'effTask_number',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  effTask_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix_num_2"
  fix_num_2Clock = new util.Clock();
  fix_num_blank_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_num_blank_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "effFeedback"
  effFeedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from effFeedback_code
  fbImage = "stim/x_mark.png";
  
  effFeedback_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'effFeedback_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  effFeedback_fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'effFeedback_fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "RL_feedback"
  RL_feedbackClock = new util.Clock();
  selected_cue_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'selected_cue_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  rl_feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rl_feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "endBlock"
  endBlockClock = new util.Clock();
  endBlock_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'endBlock_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_block_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "effort_rate_block"
  effort_rate_blockClock = new util.Clock();
  // Run 'Begin Experiment' code from effort_rate_code_2
  block_loop = 0;
  block_effort = 1;
  
  effort_rate_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'effort_rate_slider_2',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["Not effortful at all", "", "", "", "", "Somewhat effortful", "", "", "", "", "Extremely effortful"], fontSize: 0.03, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  effort_rate_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'effort_rate_text_2',
    text: 'Independently of how likely you were to win the points, how effortful was this task? \nUse the mouse to indicate on the line how effortful you felt the task was.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  eff_rate_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'eff_rate_image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.01)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "prob_rate_block"
  prob_rate_blockClock = new util.Clock();
  prob_rate_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'prob_rate_slider_2',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["0% likely to win", "50%", "100% likely to win"], fontSize: 0.03, ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    granularity: 0.1, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  prob_rate_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prob_rate_image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.01)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  prob_rate_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prob_rate_text_2',
    text: 'Independently of how mentally demanding the task is, how likely do you feel you are to win the points if you play this game?\nUse the mouse to indicate your estimated probability of success. Please note that you can click between the tick marks as well.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Run 'Begin Experiment' code from prob_rate_code_2
  block_prob = 1;
  
  // Initialize components for Routine "like_rate_block"
  like_rate_blockClock = new util.Clock();
  like_rate_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'like_rate_text_3',
    text: 'How much do you like this image?\nUse the mouse to indicate on the line how much you liked the image.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from like_rate_code_3
  block_like = 1;
  
  like_rate_slider_3 = new visual.Slider({
    win: psychoJS.window, name: 'like_rate_slider_3',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["Do not like at all", "", "", "", "", "Indifferent", "", "", "", "", "Like very much"], fontSize: 0.03, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  like_rate_image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'like_rate_image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.01)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "like_rate_rewStim_block"
  like_rate_rewStim_blockClock = new util.Clock();
  like_rate_rewStim_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'like_rate_rewStim_text_2',
    text: 'How much do you like this image?\nUse the mouse to indicate on the line how much you liked the image.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from like_rate_rewStim_code
  block_like_rewStim = 1;
  stim_block_loop = 0;
  
  like_rate_rewStim_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'like_rate_rewStim_slider_2',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["Do not like at all", "", "", "", "", "Indifferent", "", "", "", "", "Like very much"], fontSize: 0.03, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  like_rate_rewStim_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'like_rate_rewStim_image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.01)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "exit_exp_routine"
  exit_exp_routineClock = new util.Clock();
  exit_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'exit_text',
    text: "You've completed the experiment!!\n\n\nPlease press the space bar to exit the task.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  exit_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var frameN;
var continueRoutine;
var _instructneg1_resp_allKeys;
var Instruct_neg1_routineComponents;
function Instruct_neg1_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruct_neg1_routine' ---
    t = 0;
    Instruct_neg1_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructneg1_resp.keys = undefined;
    instructneg1_resp.rt = undefined;
    _instructneg1_resp_allKeys = [];
    // keep track of which components have finished
    Instruct_neg1_routineComponents = [];
    Instruct_neg1_routineComponents.push(Instruct);
    Instruct_neg1_routineComponents.push(instructneg1_resp);
    
    for (const thisComponent of Instruct_neg1_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruct_neg1_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruct_neg1_routine' ---
    // get current time
    t = Instruct_neg1_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruct* updates
    if (t >= 0.0 && Instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct.tStart = t;  // (not accounting for frame time here)
      Instruct.frameNStart = frameN;  // exact frame index
      
      Instruct.setAutoDraw(true);
    }

    
    // *instructneg1_resp* updates
    if (t >= 0.0 && instructneg1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructneg1_resp.tStart = t;  // (not accounting for frame time here)
      instructneg1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructneg1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructneg1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructneg1_resp.clearEvents(); });
    }

    if (instructneg1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructneg1_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instructneg1_resp_allKeys = _instructneg1_resp_allKeys.concat(theseKeys);
      if (_instructneg1_resp_allKeys.length > 0) {
        instructneg1_resp.keys = _instructneg1_resp_allKeys[_instructneg1_resp_allKeys.length - 1].name;  // just the last key pressed
        instructneg1_resp.rt = _instructneg1_resp_allKeys[_instructneg1_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruct_neg1_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruct_neg1_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruct_neg1_routine' ---
    for (const thisComponent of Instruct_neg1_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instructneg1_resp.corr, level);
    }
    psychoJS.experiment.addData('instructneg1_resp.keys', instructneg1_resp.keys);
    if (typeof instructneg1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructneg1_resp.rt', instructneg1_resp.rt);
        routineTimer.reset();
        }
    
    instructneg1_resp.stop();
    // the Routine "Instruct_neg1_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var like_rate_loop_initial;
function like_rate_loop_initialLoopBegin(like_rate_loop_initialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    like_rate_loop_initial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'like_rate_loop_initial'
    });
    psychoJS.experiment.addLoop(like_rate_loop_initial); // add the loop to the experiment
    currentLoop = like_rate_loop_initial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLike_rate_loop_initial of like_rate_loop_initial) {
      snapshot = like_rate_loop_initial.getSnapshot();
      like_rate_loop_initialLoopScheduler.add(importConditions(snapshot));
      like_rate_loop_initialLoopScheduler.add(like_rateRoutineBegin(snapshot));
      like_rate_loop_initialLoopScheduler.add(like_rateRoutineEachFrame());
      like_rate_loop_initialLoopScheduler.add(like_rateRoutineEnd(snapshot));
      like_rate_loop_initialLoopScheduler.add(like_rate_loop_initialLoopEndIteration(like_rate_loop_initialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function like_rate_loop_initialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(like_rate_loop_initial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function like_rate_loop_initialLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var like_rate_rewStim_loop_initial;
function like_rate_rewStim_loop_initialLoopBegin(like_rate_rewStim_loop_initialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    like_rate_rewStim_loop_initial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'like_rate_rewStim_loop_initial'
    });
    psychoJS.experiment.addLoop(like_rate_rewStim_loop_initial); // add the loop to the experiment
    currentLoop = like_rate_rewStim_loop_initial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLike_rate_rewStim_loop_initial of like_rate_rewStim_loop_initial) {
      snapshot = like_rate_rewStim_loop_initial.getSnapshot();
      like_rate_rewStim_loop_initialLoopScheduler.add(importConditions(snapshot));
      like_rate_rewStim_loop_initialLoopScheduler.add(like_rate_rewStimRoutineBegin(snapshot));
      like_rate_rewStim_loop_initialLoopScheduler.add(like_rate_rewStimRoutineEachFrame());
      like_rate_rewStim_loop_initialLoopScheduler.add(like_rate_rewStimRoutineEnd(snapshot));
      like_rate_rewStim_loop_initialLoopScheduler.add(like_rate_rewStim_loop_initialLoopEndIteration(like_rate_rewStim_loop_initialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function like_rate_rewStim_loop_initialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(like_rate_rewStim_loop_initial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function like_rate_rewStim_loop_initialLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var easy_task_ex_loop;
function easy_task_ex_loopLoopBegin(easy_task_ex_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    easy_task_ex_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ex_tasques.xlsx',
      seed: undefined, name: 'easy_task_ex_loop'
    });
    psychoJS.experiment.addLoop(easy_task_ex_loop); // add the loop to the experiment
    currentLoop = easy_task_ex_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEasy_task_ex_loop of easy_task_ex_loop) {
      snapshot = easy_task_ex_loop.getSnapshot();
      easy_task_ex_loopLoopScheduler.add(importConditions(snapshot));
      easy_task_ex_loopLoopScheduler.add(Easy_Task_exampleRoutineBegin(snapshot));
      easy_task_ex_loopLoopScheduler.add(Easy_Task_exampleRoutineEachFrame());
      easy_task_ex_loopLoopScheduler.add(Easy_Task_exampleRoutineEnd(snapshot));
      easy_task_ex_loopLoopScheduler.add(fix_easy_exRoutineBegin(snapshot));
      easy_task_ex_loopLoopScheduler.add(fix_easy_exRoutineEachFrame());
      easy_task_ex_loopLoopScheduler.add(fix_easy_exRoutineEnd(snapshot));
      easy_task_ex_loopLoopScheduler.add(easy_task_ex_loopLoopEndIteration(easy_task_ex_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function easy_task_ex_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(easy_task_ex_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function easy_task_ex_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var hard_task_ex_loop;
function hard_task_ex_loopLoopBegin(hard_task_ex_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    hard_task_ex_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ex_tasques.xlsx',
      seed: undefined, name: 'hard_task_ex_loop'
    });
    psychoJS.experiment.addLoop(hard_task_ex_loop); // add the loop to the experiment
    currentLoop = hard_task_ex_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisHard_task_ex_loop of hard_task_ex_loop) {
      snapshot = hard_task_ex_loop.getSnapshot();
      hard_task_ex_loopLoopScheduler.add(importConditions(snapshot));
      hard_task_ex_loopLoopScheduler.add(Hard_Task_exampleRoutineBegin(snapshot));
      hard_task_ex_loopLoopScheduler.add(Hard_Task_exampleRoutineEachFrame());
      hard_task_ex_loopLoopScheduler.add(Hard_Task_exampleRoutineEnd(snapshot));
      hard_task_ex_loopLoopScheduler.add(hard_task_exRoutineBegin(snapshot));
      hard_task_ex_loopLoopScheduler.add(hard_task_exRoutineEachFrame());
      hard_task_ex_loopLoopScheduler.add(hard_task_exRoutineEnd(snapshot));
      hard_task_ex_loopLoopScheduler.add(hard_task_ex_loopLoopEndIteration(hard_task_ex_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function hard_task_ex_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(hard_task_ex_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function hard_task_ex_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Cali_loop;
function Cali_loopLoopBegin(Cali_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Cali_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 40, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Cali_loop'
    });
    psychoJS.experiment.addLoop(Cali_loop); // add the loop to the experiment
    currentLoop = Cali_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCali_loop of Cali_loop) {
      snapshot = Cali_loop.getSnapshot();
      Cali_loopLoopScheduler.add(importConditions(snapshot));
      Cali_loopLoopScheduler.add(CueCalRoutineBegin(snapshot));
      Cali_loopLoopScheduler.add(CueCalRoutineEachFrame());
      Cali_loopLoopScheduler.add(CueCalRoutineEnd(snapshot));
      const trialsCaliLoopScheduler = new Scheduler(psychoJS);
      Cali_loopLoopScheduler.add(trialsCaliLoopBegin(trialsCaliLoopScheduler, snapshot));
      Cali_loopLoopScheduler.add(trialsCaliLoopScheduler);
      Cali_loopLoopScheduler.add(trialsCaliLoopEnd);
      Cali_loopLoopScheduler.add(feedbackRoutineBegin(snapshot));
      Cali_loopLoopScheduler.add(feedbackRoutineEachFrame());
      Cali_loopLoopScheduler.add(feedbackRoutineEnd(snapshot));
      Cali_loopLoopScheduler.add(Cali_loopLoopEndIteration(Cali_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trialsCali;
function trialsCaliLoopBegin(trialsCaliLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsCali = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tasques.xlsx',
      seed: undefined, name: 'trialsCali'
    });
    psychoJS.experiment.addLoop(trialsCali); // add the loop to the experiment
    currentLoop = trialsCali;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsCali of trialsCali) {
      snapshot = trialsCali.getSnapshot();
      trialsCaliLoopScheduler.add(importConditions(snapshot));
      trialsCaliLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsCaliLoopScheduler.add(trialRoutineEachFrame());
      trialsCaliLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsCaliLoopScheduler.add(fix_numRoutineBegin(snapshot));
      trialsCaliLoopScheduler.add(fix_numRoutineEachFrame());
      trialsCaliLoopScheduler.add(fix_numRoutineEnd(snapshot));
      trialsCaliLoopScheduler.add(trialsCaliLoopEndIteration(trialsCaliLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsCaliLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialsCali);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsCaliLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function Cali_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Cali_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Cali_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var effort_rate_base;
function effort_rate_baseLoopBegin(effort_rate_baseLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    effort_rate_base = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'effort_rate_base'
    });
    psychoJS.experiment.addLoop(effort_rate_base); // add the loop to the experiment
    currentLoop = effort_rate_base;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEffort_rate_base of effort_rate_base) {
      snapshot = effort_rate_base.getSnapshot();
      effort_rate_baseLoopScheduler.add(importConditions(snapshot));
      effort_rate_baseLoopScheduler.add(effort_rateRoutineBegin(snapshot));
      effort_rate_baseLoopScheduler.add(effort_rateRoutineEachFrame());
      effort_rate_baseLoopScheduler.add(effort_rateRoutineEnd(snapshot));
      effort_rate_baseLoopScheduler.add(effort_rate_baseLoopEndIteration(effort_rate_baseLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function effort_rate_baseLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(effort_rate_base);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function effort_rate_baseLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var prob_rate_base;
function prob_rate_baseLoopBegin(prob_rate_baseLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prob_rate_base = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'prob_rate_base'
    });
    psychoJS.experiment.addLoop(prob_rate_base); // add the loop to the experiment
    currentLoop = prob_rate_base;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisProb_rate_base of prob_rate_base) {
      snapshot = prob_rate_base.getSnapshot();
      prob_rate_baseLoopScheduler.add(importConditions(snapshot));
      prob_rate_baseLoopScheduler.add(prob_rateRoutineBegin(snapshot));
      prob_rate_baseLoopScheduler.add(prob_rateRoutineEachFrame());
      prob_rate_baseLoopScheduler.add(prob_rateRoutineEnd(snapshot));
      prob_rate_baseLoopScheduler.add(prob_rate_baseLoopEndIteration(prob_rate_baseLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prob_rate_baseLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prob_rate_base);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prob_rate_baseLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var like_rate_base;
function like_rate_baseLoopBegin(like_rate_baseLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    like_rate_base = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'like_rate_base'
    });
    psychoJS.experiment.addLoop(like_rate_base); // add the loop to the experiment
    currentLoop = like_rate_base;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLike_rate_base of like_rate_base) {
      snapshot = like_rate_base.getSnapshot();
      like_rate_baseLoopScheduler.add(importConditions(snapshot));
      like_rate_baseLoopScheduler.add(like_rate_2RoutineBegin(snapshot));
      like_rate_baseLoopScheduler.add(like_rate_2RoutineEachFrame());
      like_rate_baseLoopScheduler.add(like_rate_2RoutineEnd(snapshot));
      like_rate_baseLoopScheduler.add(like_rate_baseLoopEndIteration(like_rate_baseLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function like_rate_baseLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(like_rate_base);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function like_rate_baseLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Block_loop;
function Block_loopLoopBegin(Block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Block_loop'
    });
    psychoJS.experiment.addLoop(Block_loop); // add the loop to the experiment
    currentLoop = Block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock_loop of Block_loop) {
      snapshot = Block_loop.getSnapshot();
      Block_loopLoopScheduler.add(importConditions(snapshot));
      Block_loopLoopScheduler.add(startRLblockRoutineBegin(snapshot));
      Block_loopLoopScheduler.add(startRLblockRoutineEachFrame());
      Block_loopLoopScheduler.add(startRLblockRoutineEnd(snapshot));
      const effort_rl_loopLoopScheduler = new Scheduler(psychoJS);
      Block_loopLoopScheduler.add(effort_rl_loopLoopBegin(effort_rl_loopLoopScheduler, snapshot));
      Block_loopLoopScheduler.add(effort_rl_loopLoopScheduler);
      Block_loopLoopScheduler.add(effort_rl_loopLoopEnd);
      Block_loopLoopScheduler.add(endBlockRoutineBegin(snapshot));
      Block_loopLoopScheduler.add(endBlockRoutineEachFrame());
      Block_loopLoopScheduler.add(endBlockRoutineEnd(snapshot));
      const effort_rate_block_loopLoopScheduler = new Scheduler(psychoJS);
      Block_loopLoopScheduler.add(effort_rate_block_loopLoopBegin(effort_rate_block_loopLoopScheduler, snapshot));
      Block_loopLoopScheduler.add(effort_rate_block_loopLoopScheduler);
      Block_loopLoopScheduler.add(effort_rate_block_loopLoopEnd);
      const prob_rate_block_loopLoopScheduler = new Scheduler(psychoJS);
      Block_loopLoopScheduler.add(prob_rate_block_loopLoopBegin(prob_rate_block_loopLoopScheduler, snapshot));
      Block_loopLoopScheduler.add(prob_rate_block_loopLoopScheduler);
      Block_loopLoopScheduler.add(prob_rate_block_loopLoopEnd);
      const like_rate_block_loopLoopScheduler = new Scheduler(psychoJS);
      Block_loopLoopScheduler.add(like_rate_block_loopLoopBegin(like_rate_block_loopLoopScheduler, snapshot));
      Block_loopLoopScheduler.add(like_rate_block_loopLoopScheduler);
      Block_loopLoopScheduler.add(like_rate_block_loopLoopEnd);
      const like_rate_rewStim_block_loopLoopScheduler = new Scheduler(psychoJS);
      Block_loopLoopScheduler.add(like_rate_rewStim_block_loopLoopBegin(like_rate_rewStim_block_loopLoopScheduler, snapshot));
      Block_loopLoopScheduler.add(like_rate_rewStim_block_loopLoopScheduler);
      Block_loopLoopScheduler.add(like_rate_rewStim_block_loopLoopEnd);
      Block_loopLoopScheduler.add(Block_loopLoopEndIteration(Block_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var effort_rl_loop;
function effort_rl_loopLoopBegin(effort_rl_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    effort_rl_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 75, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'effort_rl_loop'
    });
    psychoJS.experiment.addLoop(effort_rl_loop); // add the loop to the experiment
    currentLoop = effort_rl_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEffort_rl_loop of effort_rl_loop) {
      snapshot = effort_rl_loop.getSnapshot();
      effort_rl_loopLoopScheduler.add(importConditions(snapshot));
      const catch_loopLoopScheduler = new Scheduler(psychoJS);
      effort_rl_loopLoopScheduler.add(catch_loopLoopBegin(catch_loopLoopScheduler, snapshot));
      effort_rl_loopLoopScheduler.add(catch_loopLoopScheduler);
      effort_rl_loopLoopScheduler.add(catch_loopLoopEnd);
      effort_rl_loopLoopScheduler.add(RL_choiceRoutineBegin(snapshot));
      effort_rl_loopLoopScheduler.add(RL_choiceRoutineEachFrame());
      effort_rl_loopLoopScheduler.add(RL_choiceRoutineEnd(snapshot));
      const faster_choice_loopLoopScheduler = new Scheduler(psychoJS);
      effort_rl_loopLoopScheduler.add(faster_choice_loopLoopBegin(faster_choice_loopLoopScheduler, snapshot));
      effort_rl_loopLoopScheduler.add(faster_choice_loopLoopScheduler);
      effort_rl_loopLoopScheduler.add(faster_choice_loopLoopEnd);
      const eff_rew_loopLoopScheduler = new Scheduler(psychoJS);
      effort_rl_loopLoopScheduler.add(eff_rew_loopLoopBegin(eff_rew_loopLoopScheduler, snapshot));
      effort_rl_loopLoopScheduler.add(eff_rew_loopLoopScheduler);
      effort_rl_loopLoopScheduler.add(eff_rew_loopLoopEnd);
      effort_rl_loopLoopScheduler.add(effort_rl_loopLoopEndIteration(effort_rl_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var catch_loop;
function catch_loopLoopBegin(catch_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    catch_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: catch_on, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'catch_loop'
    });
    psychoJS.experiment.addLoop(catch_loop); // add the loop to the experiment
    currentLoop = catch_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCatch_loop of catch_loop) {
      snapshot = catch_loop.getSnapshot();
      catch_loopLoopScheduler.add(importConditions(snapshot));
      catch_loopLoopScheduler.add(catch_fix_2RoutineBegin(snapshot));
      catch_loopLoopScheduler.add(catch_fix_2RoutineEachFrame());
      catch_loopLoopScheduler.add(catch_fix_2RoutineEnd(snapshot));
      catch_loopLoopScheduler.add(catch_trial_imageRoutineBegin(snapshot));
      catch_loopLoopScheduler.add(catch_trial_imageRoutineEachFrame());
      catch_loopLoopScheduler.add(catch_trial_imageRoutineEnd(snapshot));
      catch_loopLoopScheduler.add(catch_loopLoopEndIteration(catch_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function catch_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(catch_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function catch_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var faster_choice_loop;
function faster_choice_loopLoopBegin(faster_choice_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    faster_choice_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: faster_loop, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'faster_choice_loop'
    });
    psychoJS.experiment.addLoop(faster_choice_loop); // add the loop to the experiment
    currentLoop = faster_choice_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFaster_choice_loop of faster_choice_loop) {
      snapshot = faster_choice_loop.getSnapshot();
      faster_choice_loopLoopScheduler.add(importConditions(snapshot));
      faster_choice_loopLoopScheduler.add(Faster_routineRoutineBegin(snapshot));
      faster_choice_loopLoopScheduler.add(Faster_routineRoutineEachFrame());
      faster_choice_loopLoopScheduler.add(Faster_routineRoutineEnd(snapshot));
      faster_choice_loopLoopScheduler.add(faster_choice_loopLoopEndIteration(faster_choice_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function faster_choice_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(faster_choice_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function faster_choice_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var eff_rew_loop;
function eff_rew_loopLoopBegin(eff_rew_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    eff_rew_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: effortRew_loop, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'eff_rew_loop'
    });
    psychoJS.experiment.addLoop(eff_rew_loop); // add the loop to the experiment
    currentLoop = eff_rew_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEff_rew_loop of eff_rew_loop) {
      snapshot = eff_rew_loop.getSnapshot();
      eff_rew_loopLoopScheduler.add(importConditions(snapshot));
      eff_rew_loopLoopScheduler.add(iti_fix2RoutineBegin(snapshot));
      eff_rew_loopLoopScheduler.add(iti_fix2RoutineEachFrame());
      eff_rew_loopLoopScheduler.add(iti_fix2RoutineEnd(snapshot));
      const eff_trialLoopScheduler = new Scheduler(psychoJS);
      eff_rew_loopLoopScheduler.add(eff_trialLoopBegin(eff_trialLoopScheduler, snapshot));
      eff_rew_loopLoopScheduler.add(eff_trialLoopScheduler);
      eff_rew_loopLoopScheduler.add(eff_trialLoopEnd);
      eff_rew_loopLoopScheduler.add(effFeedbackRoutineBegin(snapshot));
      eff_rew_loopLoopScheduler.add(effFeedbackRoutineEachFrame());
      eff_rew_loopLoopScheduler.add(effFeedbackRoutineEnd(snapshot));
      eff_rew_loopLoopScheduler.add(RL_feedbackRoutineBegin(snapshot));
      eff_rew_loopLoopScheduler.add(RL_feedbackRoutineEachFrame());
      eff_rew_loopLoopScheduler.add(RL_feedbackRoutineEnd(snapshot));
      eff_rew_loopLoopScheduler.add(eff_rew_loopLoopEndIteration(eff_rew_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var eff_trial;
function eff_trialLoopBegin(eff_trialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    eff_trial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tasques.xlsx',
      seed: undefined, name: 'eff_trial'
    });
    psychoJS.experiment.addLoop(eff_trial); // add the loop to the experiment
    currentLoop = eff_trial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEff_trial of eff_trial) {
      snapshot = eff_trial.getSnapshot();
      eff_trialLoopScheduler.add(importConditions(snapshot));
      eff_trialLoopScheduler.add(effTrialRoutineBegin(snapshot));
      eff_trialLoopScheduler.add(effTrialRoutineEachFrame());
      eff_trialLoopScheduler.add(effTrialRoutineEnd(snapshot));
      eff_trialLoopScheduler.add(fix_num_2RoutineBegin(snapshot));
      eff_trialLoopScheduler.add(fix_num_2RoutineEachFrame());
      eff_trialLoopScheduler.add(fix_num_2RoutineEnd(snapshot));
      eff_trialLoopScheduler.add(eff_trialLoopEndIteration(eff_trialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function eff_trialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(eff_trial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function eff_trialLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function eff_rew_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(eff_rew_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function eff_rew_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function effort_rl_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(effort_rl_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function effort_rl_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var effort_rate_block_loop;
function effort_rate_block_loopLoopBegin(effort_rate_block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    effort_rate_block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'effort_rate_block_loop'
    });
    psychoJS.experiment.addLoop(effort_rate_block_loop); // add the loop to the experiment
    currentLoop = effort_rate_block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEffort_rate_block_loop of effort_rate_block_loop) {
      snapshot = effort_rate_block_loop.getSnapshot();
      effort_rate_block_loopLoopScheduler.add(importConditions(snapshot));
      effort_rate_block_loopLoopScheduler.add(effort_rate_blockRoutineBegin(snapshot));
      effort_rate_block_loopLoopScheduler.add(effort_rate_blockRoutineEachFrame());
      effort_rate_block_loopLoopScheduler.add(effort_rate_blockRoutineEnd(snapshot));
      effort_rate_block_loopLoopScheduler.add(effort_rate_block_loopLoopEndIteration(effort_rate_block_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function effort_rate_block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(effort_rate_block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function effort_rate_block_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var prob_rate_block_loop;
function prob_rate_block_loopLoopBegin(prob_rate_block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prob_rate_block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'prob_rate_block_loop'
    });
    psychoJS.experiment.addLoop(prob_rate_block_loop); // add the loop to the experiment
    currentLoop = prob_rate_block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisProb_rate_block_loop of prob_rate_block_loop) {
      snapshot = prob_rate_block_loop.getSnapshot();
      prob_rate_block_loopLoopScheduler.add(importConditions(snapshot));
      prob_rate_block_loopLoopScheduler.add(prob_rate_blockRoutineBegin(snapshot));
      prob_rate_block_loopLoopScheduler.add(prob_rate_blockRoutineEachFrame());
      prob_rate_block_loopLoopScheduler.add(prob_rate_blockRoutineEnd(snapshot));
      prob_rate_block_loopLoopScheduler.add(prob_rate_block_loopLoopEndIteration(prob_rate_block_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prob_rate_block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prob_rate_block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prob_rate_block_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var like_rate_block_loop;
function like_rate_block_loopLoopBegin(like_rate_block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    like_rate_block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'like_rate_block_loop'
    });
    psychoJS.experiment.addLoop(like_rate_block_loop); // add the loop to the experiment
    currentLoop = like_rate_block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLike_rate_block_loop of like_rate_block_loop) {
      snapshot = like_rate_block_loop.getSnapshot();
      like_rate_block_loopLoopScheduler.add(importConditions(snapshot));
      like_rate_block_loopLoopScheduler.add(like_rate_blockRoutineBegin(snapshot));
      like_rate_block_loopLoopScheduler.add(like_rate_blockRoutineEachFrame());
      like_rate_block_loopLoopScheduler.add(like_rate_blockRoutineEnd(snapshot));
      like_rate_block_loopLoopScheduler.add(like_rate_block_loopLoopEndIteration(like_rate_block_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function like_rate_block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(like_rate_block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function like_rate_block_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var like_rate_rewStim_block_loop;
function like_rate_rewStim_block_loopLoopBegin(like_rate_rewStim_block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    like_rate_rewStim_block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'like_rate_rewStim_block_loop'
    });
    psychoJS.experiment.addLoop(like_rate_rewStim_block_loop); // add the loop to the experiment
    currentLoop = like_rate_rewStim_block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLike_rate_rewStim_block_loop of like_rate_rewStim_block_loop) {
      snapshot = like_rate_rewStim_block_loop.getSnapshot();
      like_rate_rewStim_block_loopLoopScheduler.add(importConditions(snapshot));
      like_rate_rewStim_block_loopLoopScheduler.add(like_rate_rewStim_blockRoutineBegin(snapshot));
      like_rate_rewStim_block_loopLoopScheduler.add(like_rate_rewStim_blockRoutineEachFrame());
      like_rate_rewStim_block_loopLoopScheduler.add(like_rate_rewStim_blockRoutineEnd(snapshot));
      like_rate_rewStim_block_loopLoopScheduler.add(like_rate_rewStim_block_loopLoopEndIteration(like_rate_rewStim_block_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function like_rate_rewStim_block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(like_rate_rewStim_block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function like_rate_rewStim_block_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function Block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Block_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var like_rateComponents;
function like_rateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'like_rate' ---
    t = 0;
    like_rateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from like_rate_code
    psychoJS.experiment.addData("like_rate_num", like_rate_track);
    if ((initial_like === 1)) {
        psychoJS.experiment.addData("like_rate", "LowEffort");
    } else {
        psychoJS.experiment.addData("like_rate", "HighEffort");
    }
    
    like_rate_slider.reset()
    like_rate_image.setImage(likeImage);
    // keep track of which components have finished
    like_rateComponents = [];
    like_rateComponents.push(like_rate_text);
    like_rateComponents.push(like_rate_slider);
    like_rateComponents.push(like_rate_image);
    
    for (const thisComponent of like_rateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function like_rateRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'like_rate' ---
    // get current time
    t = like_rateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *like_rate_text* updates
    if (t >= 0.0 && like_rate_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_text.tStart = t;  // (not accounting for frame time here)
      like_rate_text.frameNStart = frameN;  // exact frame index
      
      like_rate_text.setAutoDraw(true);
    }

    
    // *like_rate_slider* updates
    if (t >= 0.0 && like_rate_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_slider.tStart = t;  // (not accounting for frame time here)
      like_rate_slider.frameNStart = frameN;  // exact frame index
      
      like_rate_slider.setAutoDraw(true);
    }

    
    // Check like_rate_slider for response to end routine
    if (like_rate_slider.getRating() !== undefined && like_rate_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *like_rate_image* updates
    if (t >= 0.0 && like_rate_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_image.tStart = t;  // (not accounting for frame time here)
      like_rate_image.frameNStart = frameN;  // exact frame index
      
      like_rate_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of like_rateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function like_rateRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'like_rate' ---
    for (const thisComponent of like_rateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from like_rate_code
    initial_like = (initial_like + 1);
    like_rate_track = (like_rate_track + 1);
    if ((initial_like > 1)) {
        likeImage = "stim/hard_circ.png";
    }
    
    psychoJS.experiment.addData('like_rate_slider.response', like_rate_slider.getRating());
    psychoJS.experiment.addData('like_rate_slider.rt', like_rate_slider.getRT());
    // the Routine "like_rate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var like_rate_rewStimComponents;
function like_rate_rewStimRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'like_rate_rewStim' ---
    t = 0;
    like_rate_rewStimClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from like_rate_rewStim_code
    psychoJS.experiment.addData("like_rate_rewStim_num", like_rate_track_rewStim);
    psychoJS.experiment.addData("like_rate_rewStim_file", rewStim_array[(base_like_rewStim - 1)]);
    psychoJS.experiment.addData("like_rate_rewStim", rewStimLabel_array[(base_like_rewStim - 1)]);
    
    like_rate_rewStim_slider.reset()
    like_rate_rewStim_image.setImage(likeImage_rewStim);
    // keep track of which components have finished
    like_rate_rewStimComponents = [];
    like_rate_rewStimComponents.push(like_rate_rewStim_text);
    like_rate_rewStimComponents.push(like_rate_rewStim_slider);
    like_rate_rewStimComponents.push(like_rate_rewStim_image);
    
    for (const thisComponent of like_rate_rewStimComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function like_rate_rewStimRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'like_rate_rewStim' ---
    // get current time
    t = like_rate_rewStimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *like_rate_rewStim_text* updates
    if (t >= 0.0 && like_rate_rewStim_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_rewStim_text.tStart = t;  // (not accounting for frame time here)
      like_rate_rewStim_text.frameNStart = frameN;  // exact frame index
      
      like_rate_rewStim_text.setAutoDraw(true);
    }

    
    // *like_rate_rewStim_slider* updates
    if (t >= 0.0 && like_rate_rewStim_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_rewStim_slider.tStart = t;  // (not accounting for frame time here)
      like_rate_rewStim_slider.frameNStart = frameN;  // exact frame index
      
      like_rate_rewStim_slider.setAutoDraw(true);
    }

    
    // Check like_rate_rewStim_slider for response to end routine
    if (like_rate_rewStim_slider.getRating() !== undefined && like_rate_rewStim_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *like_rate_rewStim_image* updates
    if (t >= 0.0 && like_rate_rewStim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_rewStim_image.tStart = t;  // (not accounting for frame time here)
      like_rate_rewStim_image.frameNStart = frameN;  // exact frame index
      
      like_rate_rewStim_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of like_rate_rewStimComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function like_rate_rewStimRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'like_rate_rewStim' ---
    for (const thisComponent of like_rate_rewStimComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from like_rate_rewStim_code
    base_like_rewStim = (base_like_rewStim + 1);
    like_rate_track_rewStim = (like_rate_track_rewStim + 1);
    likeImage_rewStim = rewStim_array[(base_like_rewStim - 1)];
    
    psychoJS.experiment.addData('like_rate_rewStim_slider.response', like_rate_rewStim_slider.getRating());
    psychoJS.experiment.addData('like_rate_rewStim_slider.rt', like_rate_rewStim_slider.getRT());
    // the Routine "like_rate_rewStim" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instruct0_resp_allKeys;
var Instruct0_routineComponents;
function Instruct0_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruct0_routine' ---
    t = 0;
    Instruct0_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruct0_resp.keys = undefined;
    instruct0_resp.rt = undefined;
    _instruct0_resp_allKeys = [];
    // keep track of which components have finished
    Instruct0_routineComponents = [];
    Instruct0_routineComponents.push(Instruct_0);
    Instruct0_routineComponents.push(instruct0_resp);
    
    for (const thisComponent of Instruct0_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruct0_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruct0_routine' ---
    // get current time
    t = Instruct0_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruct_0* updates
    if (t >= 0.0 && Instruct_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct_0.tStart = t;  // (not accounting for frame time here)
      Instruct_0.frameNStart = frameN;  // exact frame index
      
      Instruct_0.setAutoDraw(true);
    }

    
    // *instruct0_resp* updates
    if (t >= 0.0 && instruct0_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct0_resp.tStart = t;  // (not accounting for frame time here)
      instruct0_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruct0_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruct0_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruct0_resp.clearEvents(); });
    }

    if (instruct0_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruct0_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instruct0_resp_allKeys = _instruct0_resp_allKeys.concat(theseKeys);
      if (_instruct0_resp_allKeys.length > 0) {
        instruct0_resp.keys = _instruct0_resp_allKeys[_instruct0_resp_allKeys.length - 1].name;  // just the last key pressed
        instruct0_resp.rt = _instruct0_resp_allKeys[_instruct0_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruct0_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruct0_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruct0_routine' ---
    for (const thisComponent of Instruct0_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruct0_resp.corr, level);
    }
    psychoJS.experiment.addData('instruct0_resp.keys', instruct0_resp.keys);
    if (typeof instruct0_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruct0_resp.rt', instruct0_resp.rt);
        routineTimer.reset();
        }
    
    instruct0_resp.stop();
    // the Routine "Instruct0_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Instruct1_key_resp_allKeys;
var Instruct1_routineComponents;
function Instruct1_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruct1_routine' ---
    t = 0;
    Instruct1_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instruct1_key_resp.keys = undefined;
    Instruct1_key_resp.rt = undefined;
    _Instruct1_key_resp_allKeys = [];
    // keep track of which components have finished
    Instruct1_routineComponents = [];
    Instruct1_routineComponents.push(Instruct1_text);
    Instruct1_routineComponents.push(Instruct1_key_resp);
    
    for (const thisComponent of Instruct1_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruct1_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruct1_routine' ---
    // get current time
    t = Instruct1_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruct1_text* updates
    if (t >= 0.0 && Instruct1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct1_text.tStart = t;  // (not accounting for frame time here)
      Instruct1_text.frameNStart = frameN;  // exact frame index
      
      Instruct1_text.setAutoDraw(true);
    }

    
    // *Instruct1_key_resp* updates
    if (t >= 0.0 && Instruct1_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct1_key_resp.tStart = t;  // (not accounting for frame time here)
      Instruct1_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruct1_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruct1_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruct1_key_resp.clearEvents(); });
    }

    if (Instruct1_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruct1_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _Instruct1_key_resp_allKeys = _Instruct1_key_resp_allKeys.concat(theseKeys);
      if (_Instruct1_key_resp_allKeys.length > 0) {
        Instruct1_key_resp.keys = _Instruct1_key_resp_allKeys[_Instruct1_key_resp_allKeys.length - 1].name;  // just the last key pressed
        Instruct1_key_resp.rt = _Instruct1_key_resp_allKeys[_Instruct1_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruct1_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruct1_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruct1_routine' ---
    for (const thisComponent of Instruct1_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Instruct1_key_resp.corr, level);
    }
    psychoJS.experiment.addData('Instruct1_key_resp.keys', Instruct1_key_resp.keys);
    if (typeof Instruct1_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instruct1_key_resp.rt', Instruct1_key_resp.rt);
        routineTimer.reset();
        }
    
    Instruct1_key_resp.stop();
    // the Routine "Instruct1_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _easy_task_ex_key_resp_allKeys;
var Easy_Task_exampleComponents;
function Easy_Task_exampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Easy_Task_example' ---
    t = 0;
    Easy_Task_exampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    easy_task_ex_text.setText(number);
    easy_task_ex_key_resp.keys = undefined;
    easy_task_ex_key_resp.rt = undefined;
    _easy_task_ex_key_resp_allKeys = [];
    // keep track of which components have finished
    Easy_Task_exampleComponents = [];
    Easy_Task_exampleComponents.push(easy_task_ex_text);
    Easy_Task_exampleComponents.push(easy_task_ex_key_resp);
    Easy_Task_exampleComponents.push(easy_task_ex_labels);
    
    for (const thisComponent of Easy_Task_exampleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Easy_Task_exampleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Easy_Task_example' ---
    // get current time
    t = Easy_Task_exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *easy_task_ex_text* updates
    if (t >= 0.0 && easy_task_ex_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      easy_task_ex_text.tStart = t;  // (not accounting for frame time here)
      easy_task_ex_text.frameNStart = frameN;  // exact frame index
      
      easy_task_ex_text.setAutoDraw(true);
    }

    
    // *easy_task_ex_key_resp* updates
    if (t >= 0.0 && easy_task_ex_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      easy_task_ex_key_resp.tStart = t;  // (not accounting for frame time here)
      easy_task_ex_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { easy_task_ex_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { easy_task_ex_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { easy_task_ex_key_resp.clearEvents(); });
    }

    if (easy_task_ex_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = easy_task_ex_key_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _easy_task_ex_key_resp_allKeys = _easy_task_ex_key_resp_allKeys.concat(theseKeys);
      if (_easy_task_ex_key_resp_allKeys.length > 0) {
        easy_task_ex_key_resp.keys = _easy_task_ex_key_resp_allKeys[_easy_task_ex_key_resp_allKeys.length - 1].name;  // just the last key pressed
        easy_task_ex_key_resp.rt = _easy_task_ex_key_resp_allKeys[_easy_task_ex_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *easy_task_ex_labels* updates
    if (t >= 0.0 && easy_task_ex_labels.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      easy_task_ex_labels.tStart = t;  // (not accounting for frame time here)
      easy_task_ex_labels.frameNStart = frameN;  // exact frame index
      
      easy_task_ex_labels.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Easy_Task_exampleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Easy_Task_exampleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Easy_Task_example' ---
    for (const thisComponent of Easy_Task_exampleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(easy_task_ex_key_resp.corr, level);
    }
    psychoJS.experiment.addData('easy_task_ex_key_resp.keys', easy_task_ex_key_resp.keys);
    if (typeof easy_task_ex_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('easy_task_ex_key_resp.rt', easy_task_ex_key_resp.rt);
        routineTimer.reset();
        }
    
    easy_task_ex_key_resp.stop();
    // the Routine "Easy_Task_example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fix_easy_exComponents;
function fix_easy_exRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix_easy_ex' ---
    t = 0;
    fix_easy_exClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fix_easy_exComponents = [];
    fix_easy_exComponents.push(easy_task_ex_labes1);
    
    for (const thisComponent of fix_easy_exComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fix_easy_exRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix_easy_ex' ---
    // get current time
    t = fix_easy_exClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *easy_task_ex_labes1* updates
    if (t >= 0.0 && easy_task_ex_labes1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      easy_task_ex_labes1.tStart = t;  // (not accounting for frame time here)
      easy_task_ex_labes1.frameNStart = frameN;  // exact frame index
      
      easy_task_ex_labes1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (easy_task_ex_labes1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      easy_task_ex_labes1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix_easy_exComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_easy_exRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix_easy_ex' ---
    for (const thisComponent of fix_easy_exComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Instruct2_key_resp_allKeys;
var Instruct2_routineComponents;
function Instruct2_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruct2_routine' ---
    t = 0;
    Instruct2_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instruct2_key_resp.keys = undefined;
    Instruct2_key_resp.rt = undefined;
    _Instruct2_key_resp_allKeys = [];
    // keep track of which components have finished
    Instruct2_routineComponents = [];
    Instruct2_routineComponents.push(Instruct2_text);
    Instruct2_routineComponents.push(Instruct2_key_resp);
    
    for (const thisComponent of Instruct2_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruct2_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruct2_routine' ---
    // get current time
    t = Instruct2_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruct2_text* updates
    if (t >= 0.0 && Instruct2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct2_text.tStart = t;  // (not accounting for frame time here)
      Instruct2_text.frameNStart = frameN;  // exact frame index
      
      Instruct2_text.setAutoDraw(true);
    }

    
    // *Instruct2_key_resp* updates
    if (t >= 0.0 && Instruct2_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct2_key_resp.tStart = t;  // (not accounting for frame time here)
      Instruct2_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruct2_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruct2_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruct2_key_resp.clearEvents(); });
    }

    if (Instruct2_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruct2_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _Instruct2_key_resp_allKeys = _Instruct2_key_resp_allKeys.concat(theseKeys);
      if (_Instruct2_key_resp_allKeys.length > 0) {
        Instruct2_key_resp.keys = _Instruct2_key_resp_allKeys[_Instruct2_key_resp_allKeys.length - 1].name;  // just the last key pressed
        Instruct2_key_resp.rt = _Instruct2_key_resp_allKeys[_Instruct2_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruct2_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruct2_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruct2_routine' ---
    for (const thisComponent of Instruct2_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Instruct2_key_resp.corr, level);
    }
    psychoJS.experiment.addData('Instruct2_key_resp.keys', Instruct2_key_resp.keys);
    if (typeof Instruct2_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instruct2_key_resp.rt', Instruct2_key_resp.rt);
        routineTimer.reset();
        }
    
    Instruct2_key_resp.stop();
    // the Routine "Instruct2_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _hard_key_resp_allKeys;
var Hard_Task_exampleComponents;
function Hard_Task_exampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Hard_Task_example' ---
    t = 0;
    Hard_Task_exampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Hard_task_ex_number.setColor(new util.Color(color));
    Hard_task_ex_number.setText(number);
    hard_key_resp.keys = undefined;
    hard_key_resp.rt = undefined;
    _hard_key_resp_allKeys = [];
    // keep track of which components have finished
    Hard_Task_exampleComponents = [];
    Hard_Task_exampleComponents.push(Hard_task_ex_labels);
    Hard_Task_exampleComponents.push(Hard_task_ex_number);
    Hard_Task_exampleComponents.push(hard_key_resp);
    
    for (const thisComponent of Hard_Task_exampleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Hard_Task_exampleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Hard_Task_example' ---
    // get current time
    t = Hard_Task_exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Hard_task_ex_labels* updates
    if (t >= 0.0 && Hard_task_ex_labels.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Hard_task_ex_labels.tStart = t;  // (not accounting for frame time here)
      Hard_task_ex_labels.frameNStart = frameN;  // exact frame index
      
      Hard_task_ex_labels.setAutoDraw(true);
    }

    
    // *Hard_task_ex_number* updates
    if (t >= 0.0 && Hard_task_ex_number.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Hard_task_ex_number.tStart = t;  // (not accounting for frame time here)
      Hard_task_ex_number.frameNStart = frameN;  // exact frame index
      
      Hard_task_ex_number.setAutoDraw(true);
    }

    
    // *hard_key_resp* updates
    if (t >= 0.0 && hard_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hard_key_resp.tStart = t;  // (not accounting for frame time here)
      hard_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { hard_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { hard_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { hard_key_resp.clearEvents(); });
    }

    if (hard_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = hard_key_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _hard_key_resp_allKeys = _hard_key_resp_allKeys.concat(theseKeys);
      if (_hard_key_resp_allKeys.length > 0) {
        hard_key_resp.keys = _hard_key_resp_allKeys[_hard_key_resp_allKeys.length - 1].name;  // just the last key pressed
        hard_key_resp.rt = _hard_key_resp_allKeys[_hard_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Hard_Task_exampleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Hard_Task_exampleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Hard_Task_example' ---
    for (const thisComponent of Hard_Task_exampleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(hard_key_resp.corr, level);
    }
    psychoJS.experiment.addData('hard_key_resp.keys', hard_key_resp.keys);
    if (typeof hard_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('hard_key_resp.rt', hard_key_resp.rt);
        routineTimer.reset();
        }
    
    hard_key_resp.stop();
    // the Routine "Hard_Task_example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var hard_task_exComponents;
function hard_task_exRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hard_task_ex' ---
    t = 0;
    hard_task_exClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    hard_task_exComponents = [];
    hard_task_exComponents.push(fix_hard_labl_1);
    
    for (const thisComponent of hard_task_exComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function hard_task_exRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hard_task_ex' ---
    // get current time
    t = hard_task_exClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_hard_labl_1* updates
    if (t >= 0.0 && fix_hard_labl_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_hard_labl_1.tStart = t;  // (not accounting for frame time here)
      fix_hard_labl_1.frameNStart = frameN;  // exact frame index
      
      fix_hard_labl_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_hard_labl_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_hard_labl_1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of hard_task_exComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function hard_task_exRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hard_task_ex' ---
    for (const thisComponent of hard_task_exComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Instruct3_key_resp_allKeys;
var Instruct3_routineComponents;
function Instruct3_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruct3_routine' ---
    t = 0;
    Instruct3_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instruct3_key_resp.keys = undefined;
    Instruct3_key_resp.rt = undefined;
    _Instruct3_key_resp_allKeys = [];
    // keep track of which components have finished
    Instruct3_routineComponents = [];
    Instruct3_routineComponents.push(Instruct3_text);
    Instruct3_routineComponents.push(Instruct3_key_resp);
    
    for (const thisComponent of Instruct3_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruct3_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruct3_routine' ---
    // get current time
    t = Instruct3_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruct3_text* updates
    if (t >= 0.0 && Instruct3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct3_text.tStart = t;  // (not accounting for frame time here)
      Instruct3_text.frameNStart = frameN;  // exact frame index
      
      Instruct3_text.setAutoDraw(true);
    }

    
    // *Instruct3_key_resp* updates
    if (t >= 0.0 && Instruct3_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct3_key_resp.tStart = t;  // (not accounting for frame time here)
      Instruct3_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruct3_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruct3_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruct3_key_resp.clearEvents(); });
    }

    if (Instruct3_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruct3_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _Instruct3_key_resp_allKeys = _Instruct3_key_resp_allKeys.concat(theseKeys);
      if (_Instruct3_key_resp_allKeys.length > 0) {
        Instruct3_key_resp.keys = _Instruct3_key_resp_allKeys[_Instruct3_key_resp_allKeys.length - 1].name;  // just the last key pressed
        Instruct3_key_resp.rt = _Instruct3_key_resp_allKeys[_Instruct3_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruct3_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruct3_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruct3_routine' ---
    for (const thisComponent of Instruct3_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Instruct3_key_resp.corr, level);
    }
    psychoJS.experiment.addData('Instruct3_key_resp.keys', Instruct3_key_resp.keys);
    if (typeof Instruct3_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instruct3_key_resp.rt', Instruct3_key_resp.rt);
        routineTimer.reset();
        }
    
    Instruct3_key_resp.stop();
    // the Routine "Instruct3_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Instruct4_key_resp_allKeys;
var Instruct4_routineComponents;
function Instruct4_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruct4_routine' ---
    t = 0;
    Instruct4_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instruct4_key_resp.keys = undefined;
    Instruct4_key_resp.rt = undefined;
    _Instruct4_key_resp_allKeys = [];
    // keep track of which components have finished
    Instruct4_routineComponents = [];
    Instruct4_routineComponents.push(Instruct4_text);
    Instruct4_routineComponents.push(Instruct4_image);
    Instruct4_routineComponents.push(Instruct4_key_resp);
    
    for (const thisComponent of Instruct4_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruct4_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruct4_routine' ---
    // get current time
    t = Instruct4_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruct4_text* updates
    if (t >= 0.0 && Instruct4_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct4_text.tStart = t;  // (not accounting for frame time here)
      Instruct4_text.frameNStart = frameN;  // exact frame index
      
      Instruct4_text.setAutoDraw(true);
    }

    
    // *Instruct4_image* updates
    if (t >= 0.0 && Instruct4_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct4_image.tStart = t;  // (not accounting for frame time here)
      Instruct4_image.frameNStart = frameN;  // exact frame index
      
      Instruct4_image.setAutoDraw(true);
    }

    
    // *Instruct4_key_resp* updates
    if (t >= 0.0 && Instruct4_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct4_key_resp.tStart = t;  // (not accounting for frame time here)
      Instruct4_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruct4_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruct4_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruct4_key_resp.clearEvents(); });
    }

    if (Instruct4_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruct4_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _Instruct4_key_resp_allKeys = _Instruct4_key_resp_allKeys.concat(theseKeys);
      if (_Instruct4_key_resp_allKeys.length > 0) {
        Instruct4_key_resp.keys = _Instruct4_key_resp_allKeys[_Instruct4_key_resp_allKeys.length - 1].name;  // just the last key pressed
        Instruct4_key_resp.rt = _Instruct4_key_resp_allKeys[_Instruct4_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruct4_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruct4_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruct4_routine' ---
    for (const thisComponent of Instruct4_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Instruct4_key_resp.corr, level);
    }
    psychoJS.experiment.addData('Instruct4_key_resp.keys', Instruct4_key_resp.keys);
    if (typeof Instruct4_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instruct4_key_resp.rt', Instruct4_key_resp.rt);
        routineTimer.reset();
        }
    
    Instruct4_key_resp.stop();
    // the Routine "Instruct4_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Instruct5_key_resp_allKeys;
var Instruct5_routineComponents;
function Instruct5_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruct5_routine' ---
    t = 0;
    Instruct5_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instruct5_key_resp.keys = undefined;
    Instruct5_key_resp.rt = undefined;
    _Instruct5_key_resp_allKeys = [];
    // keep track of which components have finished
    Instruct5_routineComponents = [];
    Instruct5_routineComponents.push(Instruct5_text);
    Instruct5_routineComponents.push(Instruct5_key_resp);
    
    for (const thisComponent of Instruct5_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruct5_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruct5_routine' ---
    // get current time
    t = Instruct5_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruct5_text* updates
    if (t >= 0.0 && Instruct5_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct5_text.tStart = t;  // (not accounting for frame time here)
      Instruct5_text.frameNStart = frameN;  // exact frame index
      
      Instruct5_text.setAutoDraw(true);
    }

    
    // *Instruct5_key_resp* updates
    if (t >= 0.0 && Instruct5_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruct5_key_resp.tStart = t;  // (not accounting for frame time here)
      Instruct5_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruct5_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruct5_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruct5_key_resp.clearEvents(); });
    }

    if (Instruct5_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruct5_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _Instruct5_key_resp_allKeys = _Instruct5_key_resp_allKeys.concat(theseKeys);
      if (_Instruct5_key_resp_allKeys.length > 0) {
        Instruct5_key_resp.keys = _Instruct5_key_resp_allKeys[_Instruct5_key_resp_allKeys.length - 1].name;  // just the last key pressed
        Instruct5_key_resp.rt = _Instruct5_key_resp_allKeys[_Instruct5_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruct5_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruct5_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruct5_routine' ---
    for (const thisComponent of Instruct5_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Instruct5_key_resp.corr, level);
    }
    psychoJS.experiment.addData('Instruct5_key_resp.keys', Instruct5_key_resp.keys);
    if (typeof Instruct5_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instruct5_key_resp.rt', Instruct5_key_resp.rt);
        routineTimer.reset();
        }
    
    Instruct5_key_resp.stop();
    // the Routine "Instruct5_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _start_train_resp_allKeys;
var start_Train_RoutineComponents;
function start_Train_RoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_Train_Routine' ---
    t = 0;
    start_Train_RoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    start_train_resp.keys = undefined;
    start_train_resp.rt = undefined;
    _start_train_resp_allKeys = [];
    // keep track of which components have finished
    start_Train_RoutineComponents = [];
    start_Train_RoutineComponents.push(start_train_text);
    start_Train_RoutineComponents.push(start_train_resp);
    
    for (const thisComponent of start_Train_RoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_Train_RoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_Train_Routine' ---
    // get current time
    t = start_Train_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_train_text* updates
    if (t >= 0.0 && start_train_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_train_text.tStart = t;  // (not accounting for frame time here)
      start_train_text.frameNStart = frameN;  // exact frame index
      
      start_train_text.setAutoDraw(true);
    }

    
    // *start_train_resp* updates
    if (t >= 0.0 && start_train_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_train_resp.tStart = t;  // (not accounting for frame time here)
      start_train_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_train_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_train_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_train_resp.clearEvents(); });
    }

    if (start_train_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_train_resp.getKeys({keyList: ['space'], waitRelease: false});
      _start_train_resp_allKeys = _start_train_resp_allKeys.concat(theseKeys);
      if (_start_train_resp_allKeys.length > 0) {
        start_train_resp.keys = _start_train_resp_allKeys[_start_train_resp_allKeys.length - 1].name;  // just the last key pressed
        start_train_resp.rt = _start_train_resp_allKeys[_start_train_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_Train_RoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_Train_RoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_Train_Routine' ---
    for (const thisComponent of start_Train_RoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_train_resp.corr, level);
    }
    psychoJS.experiment.addData('start_train_resp.keys', start_train_resp.keys);
    if (typeof start_train_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_train_resp.rt', start_train_resp.rt);
        routineTimer.reset();
        }
    
    start_train_resp.stop();
    // the Routine "start_Train_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cond;
var ncorrectAns;
var nincorrAns;
var ReacTime;
var task;
var CueCalComponents;
function CueCalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CueCal' ---
    t = 0;
    CueCalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from TrainCueCode
    cond = allcond[nbl];
    ncorrectAns = 0;
    nincorrAns = 0;
    ReacTime = [];
    if ((cond === 1)) {
        task = 2;
        nEasy = (nEasy + 1);
        cueCal = "stim/easy_blue_circ.png";
    } else {
        if ((cond === 2)) {
            util.shuffle(subtasks);
            k = 0;
            nHard = (nHard + 1);
            cueCal = "stim/hard_circ.png";
        }
    }
    psychoJS.experiment.addData("Cue_cond", cond);
    psychoJS.experiment.addData("CalTrial", cal_i);
    
    CueCalibrationImage.setImage(cueCal);
    // keep track of which components have finished
    CueCalComponents = [];
    CueCalComponents.push(CueCalibrationImage);
    CueCalComponents.push(TrainCueFix);
    
    for (const thisComponent of CueCalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CueCalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CueCal' ---
    // get current time
    t = CueCalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *CueCalibrationImage* updates
    if (t >= 0.0 && CueCalibrationImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CueCalibrationImage.tStart = t;  // (not accounting for frame time here)
      CueCalibrationImage.frameNStart = frameN;  // exact frame index
      
      CueCalibrationImage.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CueCalibrationImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CueCalibrationImage.setAutoDraw(false);
    }
    
    // *TrainCueFix* updates
    if (t >= 1.5 && TrainCueFix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TrainCueFix.tStart = t;  // (not accounting for frame time here)
      TrainCueFix.frameNStart = frameN;  // exact frame index
      
      TrainCueFix.setAutoDraw(true);
    }

    frameRemains = 1.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TrainCueFix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TrainCueFix.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CueCalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var startTime;
function CueCalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CueCal' ---
    for (const thisComponent of CueCalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from TrainCueCode
    startTime = globalClock.getTime();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var k;
var correctAns;
var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from NumPresCode
    if ((cond === 2)) {
        task = subtasks[k];
        if ((k === 0)) {
            k = 1;
        } else {
            if ((k === 1)) {
                k = 0;
            }
        }
    }
    if ((task === 1)) {
        numbersCal.color = [1, 1, (- 1)];
        correctAns = task1;
    } else {
        if ((task === 2)) {
            numbersCal.color = [(- 1), (- 1), 1];
            correctAns = task2;
        }
    }
    psychoJS.experiment.addData("Cue_cond", cond);
    psychoJS.experiment.addData("TaskCal", task);
    psychoJS.experiment.addData("CalTrial", cal_i);
    
    numbersCal.setText(number);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(numbersCal);
    trialComponents.push(key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from NumPresCode
    if (((globalClock.getTime() - startTime) >= 6)) {
        continueRoutine = false;
        trialsCali.finished = true;
    }
    
    
    // *numbersCal* updates
    if (t >= 0.0 && numbersCal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      numbersCal.tStart = t;  // (not accounting for frame time here)
      numbersCal.frameNStart = frameN;  // exact frame index
      
      numbersCal.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == correctAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from NumPresCode
    if (key_resp.keys) {
        if ((key_resp.corr === 1)) {
            ncorrectAns = (ncorrectAns + 1);
            ReacTime.push(key_resp.rt);
        } else {
            if ((key_resp.corr === 0)) {
                nincorrAns = (nincorrAns + 1);
            }
        }
    } else {
        if ((! key_resp.keys)) {
            console.log("in no response");
            if ((trialsCali.thisTrialN === 0)) {
                ncorrectAns = 0;
                nincorrAns = (nincorrAns + 1);
            }
        }
    }
    
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correctAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fix_numComponents;
function fix_numRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix_num' ---
    t = 0;
    fix_numClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fix_numComponents = [];
    fix_numComponents.push(fix_num_blank);
    
    for (const thisComponent of fix_numComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fix_numRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix_num' ---
    // get current time
    t = fix_numClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_num_blank* updates
    if (t >= 0.0 && fix_num_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_num_blank.tStart = t;  // (not accounting for frame time here)
      fix_num_blank.frameNStart = frameN;  // exact frame index
      
      fix_num_blank.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_num_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_num_blank.setAutoDraw(false);
    }
    // Run 'Each Frame' code from time_out
    if (((globalClock.getTime() - startTime) >= 6)) {
        continueRoutine = false;
        trialsCali.finished = true;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix_numComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_numRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix_num' ---
    for (const thisComponent of fix_numComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var A2;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from feedback_code
    A=[]
    A2=[]
    rts=[]
    
    if ((ncorrectAns > 0)) {
            MRT = (Math.round(((util.sum(ReacTime) / ncorrectAns) * 100)) / 100);
            if ((nincorrAns > 2)) {
                if ((cond === 1)) {
                    thisTR = [4, MRT];
                    respEasy.push(thisTR);
                    accuracyEasy.push(0);
                } else {
                    if ((cond === 2)) {
                        thisTR = [3, MRT];
                        respHard.push(thisTR);
                        accuracyHard.push(0);
                    }
                }     
                Feedback = 0;            
            } else {
                if ((nincorrAns <= 2)) {
                    if (((cond === 1) && (ncorrectAns >= 4))) {
                        thisTR = [ncorrectAns, MRT];
                        respEasy.push(thisTR);
                        nEasyCorr = (nEasyCorr + 1);
                        if ((nEasyCorr > trthr)) {
                            A = respEasy.slice(((nEasyCorr - trthr) - 1), (nEasyCorr - 1));
                            A2 = function () {
                                var _pj_a = [], _pj_b = A;
                                for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
                                    var item = _pj_b[_pj_c];
                                    _pj_a.push(item[0]);
                                }
                                return _pj_a;
                            }
                            .call(this);
                            A2.sort(function(a, b) {
                                return a - b;
                            });
                            thr_ncc = A2[1];
                            if ((A2[0] === thr_ncc)) {
                                rts = [];
                                for (var i, _pj_c = 0, _pj_a = util.range(A.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                                    i = _pj_a[_pj_c];
                                    if ((A[i][0] === thr_ncc)) {
                                        rts.push(A[i][1]);
                                    }
                                }
                                rts.sort(function(a, b) {
                                    return a - b;
                                });
                                thr_rt = rts.slice((- 2))[0];
                            } else {
                                if ((A2[0] < thr_ncc)) {
                                    thr_rt = 100;
                                }
                            }
                            cutEasy = [];
                            cutEasy.push(thr_ncc);
                            cutEasy.push(thr_rt);
                        }
                        if ((((ncorrectAns > cutEasy[0]) || ((ncorrectAns === cutEasy[0]) && (cutEasy[1] === 100))) || (((ncorrectAns === cutEasy[0]) && (cutEasy[1] < 100)) && (MRT <= cutEasy[1])))) {
                            Feedback = 2;
                            points = (points + 2);
                            accuracyEasy.push(1);
                        } else {
                            if (((ncorrectAns < cutEasy[0]) || (((ncorrectAns === cutEasy[0]) && (cutEasy[1] < 100)) && (MRT > cutEasy[1])))) {
                                Feedback = 0;
                                accuracyEasy.push(0);
                            }
                        }
                    } else {
                        if (((cond === 1) && (ncorrectAns < 4))) {
                            thisTR = [4, MRT];
                            respEasy.push(thisTR);
                            Feedback = 0;
                            accuracyEasy.push(0);
                        } else {
                            if (((cond === 2) && (ncorrectAns >=3))) {
                                thisTR = [ncorrectAns, MRT];
                                respHard.push(thisTR);
                                nHardCorr = (nHardCorr + 1);
                                if ((nHardCorr > trthr)) {
                                    A = respHard.slice(((nHardCorr - trthr) - 1), (nHardCorr - 1));
                                    A2 = function () {
                                        var _pj_a = [], _pj_b = A;
                                        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
                                            var item = _pj_b[_pj_c];
                                            _pj_a.push(item[0]);
                                        }
                                        return _pj_a;
                                    }
                                    .call(this);
                                    A2.sort(function(a, b) {
                                        return a - b;
                                    });
                                    thr_ncc = A2[1];
                                    if ((A2[0] === thr_ncc)) {
                                        rts = [];
                                        for (var i, _pj_c = 0, _pj_a = util.range(A.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                                            i = _pj_a[_pj_c];
                                            if ((A[i][0] === thr_ncc)) {
                                                rts.push(A[i][1]);
                                            }
                                        }
                                        rts.sort(function(a, b) {
                                            return a - b;
                                        });
                                        thr_rt = rts.slice((- 2))[0];
                                    } else {
                                        if ((A2[0] < thr_ncc)) {
                                            thr_rt = 100;
                                        }
                                    }
    
                                    cutHard = [];
                                    cutHard.push(thr_ncc);
                                    cutHard.push(thr_rt);
                                }
                                if ((((ncorrectAns > cutHard[0]) || ((ncorrectAns === cutHard[0]) && (cutHard[1] === 100))) || (((ncorrectAns === cutHard[0]) && (cutHard[1] < 100)) && (MRT <= cutHard[1])))) {
                                    Feedback = 2;
                                    points = (points + 2);
                                    accuracyHard.push(1);
                                } else {
                                    if (((ncorrectAns < cutHard[0]) || (((ncorrectAns === cutHard[0]) && (cutHard[1] < 100)) && (MRT > cutHard[1])))) {
                                        Feedback = 0;
                                        accuracyHard.push(0);
                                    }
                                }
                            } else {
                                if (((cond === 2) && (ncorrectAns <3))) {
                                    thisTR = [3, MRT];
                                    respHard.push(thisTR);
                                    Feedback = 0;
                                    accuracyHard.push(0);
                                }
                            }
                        }
                    }
                }
            }
        
    }else {
        MRT=100;
        if ((cond === 1)) {
            thisTR = [4, MRT];
            respEasy.push(thisTR);
            accuracyEasy.push(0);
        } else {
            if ((cond === 2)) {
                thisTR = [3, MRT];
                respHard.push(thisTR);
                accuracyHard.push(0);
            }
        }
        Feedback = 0;
    } 
    
    psychoJS.experiment.addData("Fdbk_cal", Feedback);
    psychoJS.experiment.addData("Thr_nC_cal", thr_ncc);
    psychoJS.experiment.addData("Thr_RT_cal", thr_rt);
    
    console.log("Fdbk_cal  ", Feedback.toString());
    
    if ((cond === 1)) {
        if ((accuracyEasy.length > 0)) {
            PCTCOR = (Math.round(((util.sum(accuracyEasy) / accuracyEasy.length) * 100)) / 100);
            psychoJS.experiment.addData("pct_corrEasy", PCTCOR);
        } 
    } else {
        if ((cond === 2)) {
            if ((accuracyHard.length > 0)) {
                PCTCOR = (Math.round(((util.sum(accuracyHard) / accuracyHard.length) * 100)) / 100);
                psychoJS.experiment.addData("pct_corrHard", PCTCOR);
            }
        }
    }
    
    psychoJS.experiment.addData("Cue_cond", cond);
    psychoJS.experiment.addData("TaskCal", task);
    psychoJS.experiment.addData("CalTrial", cal_i);
    cali_fb_text.setText((("You earn " + Feedback.toString()) + " points"));
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(cali_fb_text);
    feedbackComponents.push(fix_cali_fb);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cali_fb_text* updates
    if (t >= 0.5 && cali_fb_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cali_fb_text.tStart = t;  // (not accounting for frame time here)
      cali_fb_text.frameNStart = frameN;  // exact frame index
      
      cali_fb_text.setAutoDraw(true);
    }

    frameRemains = 0.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cali_fb_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cali_fb_text.setAutoDraw(false);
    }
    
    // *fix_cali_fb* updates
    if (t >= 0.0 && fix_cali_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cali_fb.tStart = t;  // (not accounting for frame time here)
      fix_cali_fb.frameNStart = frameN;  // exact frame index
      
      fix_cali_fb.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cali_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cali_fb.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from feedback_code
    nbl = (nbl + 1);
    cal_i=cal_i+1;
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _endCali_resp_allKeys;
var endCaliComponents;
function endCaliRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endCali' ---
    t = 0;
    endCaliClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text.setText(((((("Well done! You've completed the practice." + "\n\n You've also accumulated ") + points.toString()) + " points") + "\n\n Before moving on to the next phase, we need to answer some questions. Please use the mouse to click the position on the line that best describes how you feel.") + "\n\n\n\n Press SPACE to continue."));
    endCali_resp.keys = undefined;
    endCali_resp.rt = undefined;
    _endCali_resp_allKeys = [];
    // Run 'Begin Routine' code from endCali_code
    psychoJS.experiment.addData("Points_cal", points);
    
    // keep track of which components have finished
    endCaliComponents = [];
    endCaliComponents.push(text);
    endCaliComponents.push(endCali_resp);
    
    for (const thisComponent of endCaliComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endCaliRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endCali' ---
    // get current time
    t = endCaliClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *endCali_resp* updates
    if (t >= 0.0 && endCali_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endCali_resp.tStart = t;  // (not accounting for frame time here)
      endCali_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endCali_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endCali_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endCali_resp.clearEvents(); });
    }

    if (endCali_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = endCali_resp.getKeys({keyList: ['space'], waitRelease: false});
      _endCali_resp_allKeys = _endCali_resp_allKeys.concat(theseKeys);
      if (_endCali_resp_allKeys.length > 0) {
        endCali_resp.keys = _endCali_resp_allKeys[_endCali_resp_allKeys.length - 1].name;  // just the last key pressed
        endCali_resp.rt = _endCali_resp_allKeys[_endCali_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endCaliComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endCaliRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endCali' ---
    for (const thisComponent of endCaliComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(endCali_resp.corr, level);
    }
    psychoJS.experiment.addData('endCali_resp.keys', endCali_resp.keys);
    if (typeof endCali_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endCali_resp.rt', endCali_resp.rt);
        routineTimer.reset();
        }
    
    endCali_resp.stop();
    // the Routine "endCali" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var effort_rateComponents;
function effort_rateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'effort_rate' ---
    t = 0;
    effort_rateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from effort_rate_code
    psychoJS.experiment.addData("effort_rate_num", effort_rate_track);
    if ((base_effort === 1)) {
        psychoJS.experiment.addData("effort_rate", "LowEffort");
    } else {
        psychoJS.experiment.addData("effort_rate", "HighEffort");
    }
    
    effort_rate_slider.reset()
    eff_rate_image.setImage(effImage);
    // keep track of which components have finished
    effort_rateComponents = [];
    effort_rateComponents.push(effort_rate_slider);
    effort_rateComponents.push(effort_rate_text);
    effort_rateComponents.push(eff_rate_image);
    
    for (const thisComponent of effort_rateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function effort_rateRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'effort_rate' ---
    // get current time
    t = effort_rateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *effort_rate_slider* updates
    if (t >= 0.0 && effort_rate_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effort_rate_slider.tStart = t;  // (not accounting for frame time here)
      effort_rate_slider.frameNStart = frameN;  // exact frame index
      
      effort_rate_slider.setAutoDraw(true);
    }

    
    // Check effort_rate_slider for response to end routine
    if (effort_rate_slider.getRating() !== undefined && effort_rate_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *effort_rate_text* updates
    if (t >= 0.0 && effort_rate_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effort_rate_text.tStart = t;  // (not accounting for frame time here)
      effort_rate_text.frameNStart = frameN;  // exact frame index
      
      effort_rate_text.setAutoDraw(true);
    }

    
    // *eff_rate_image* updates
    if (t >= 0.0 && eff_rate_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      eff_rate_image.tStart = t;  // (not accounting for frame time here)
      eff_rate_image.frameNStart = frameN;  // exact frame index
      
      eff_rate_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of effort_rateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function effort_rateRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'effort_rate' ---
    for (const thisComponent of effort_rateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from effort_rate_code
    base_effort = (base_effort + 1);
    effort_rate_track = (effort_rate_track + 1);
    if ((base_effort > 1)) {
        effImage = "stim/hard_circ.png";
    }
    
    psychoJS.experiment.addData('effort_rate_slider.response', effort_rate_slider.getRating());
    psychoJS.experiment.addData('effort_rate_slider.rt', effort_rate_slider.getRT());
    // the Routine "effort_rate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prob_rateComponents;
function prob_rateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prob_rate' ---
    t = 0;
    prob_rateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    prob_rate_slider.reset()
    prob_rate_image.setImage(probImage);
    // Run 'Begin Routine' code from prob_rate_code
    psychoJS.experiment.addData("prob_rate_num", prob_rate_track);
    if ((base_prob === 1)) {
        psychoJS.experiment.addData("prob_rate", "LowEffort");
    } else {
        psychoJS.experiment.addData("prob_rate", "HighEffort");
    }
    
    // keep track of which components have finished
    prob_rateComponents = [];
    prob_rateComponents.push(prob_rate_slider);
    prob_rateComponents.push(prob_rate_image);
    prob_rateComponents.push(prob_rate_text);
    
    for (const thisComponent of prob_rateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prob_rateRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prob_rate' ---
    // get current time
    t = prob_rateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prob_rate_slider* updates
    if (t >= 0.0 && prob_rate_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prob_rate_slider.tStart = t;  // (not accounting for frame time here)
      prob_rate_slider.frameNStart = frameN;  // exact frame index
      
      prob_rate_slider.setAutoDraw(true);
    }

    
    // Check prob_rate_slider for response to end routine
    if (prob_rate_slider.getRating() !== undefined && prob_rate_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *prob_rate_image* updates
    if (t >= 0.0 && prob_rate_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prob_rate_image.tStart = t;  // (not accounting for frame time here)
      prob_rate_image.frameNStart = frameN;  // exact frame index
      
      prob_rate_image.setAutoDraw(true);
    }

    
    // *prob_rate_text* updates
    if (t >= 0.0 && prob_rate_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prob_rate_text.tStart = t;  // (not accounting for frame time here)
      prob_rate_text.frameNStart = frameN;  // exact frame index
      
      prob_rate_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prob_rateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prob_rateRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prob_rate' ---
    for (const thisComponent of prob_rateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prob_rate_slider.response', prob_rate_slider.getRating());
    psychoJS.experiment.addData('prob_rate_slider.rt', prob_rate_slider.getRT());
    // Run 'End Routine' code from prob_rate_code
    base_prob = (base_prob + 1);
    prob_rate_track = (prob_rate_track + 1);
    if ((base_prob > 1)) {
        probImage = "stim/hard_circ.png";
    }
    
    // the Routine "prob_rate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var like_rate_2Components;
function like_rate_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'like_rate_2' ---
    t = 0;
    like_rate_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from like_rate_code_2
    psychoJS.experiment.addData("like_rate_num", like_rate_track);
    if ((base_like === 1)) {
        psychoJS.experiment.addData("like_rate", "LowEffort");
    } else {
        psychoJS.experiment.addData("like_rate", "HighEffort");
    }
    
    like_rate_slider_2.reset()
    like_rate_image_2.setImage(likeImage2);
    // keep track of which components have finished
    like_rate_2Components = [];
    like_rate_2Components.push(like_rate_text_2);
    like_rate_2Components.push(like_rate_slider_2);
    like_rate_2Components.push(like_rate_image_2);
    
    for (const thisComponent of like_rate_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function like_rate_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'like_rate_2' ---
    // get current time
    t = like_rate_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *like_rate_text_2* updates
    if (t >= 0.0 && like_rate_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_text_2.tStart = t;  // (not accounting for frame time here)
      like_rate_text_2.frameNStart = frameN;  // exact frame index
      
      like_rate_text_2.setAutoDraw(true);
    }

    
    // *like_rate_slider_2* updates
    if (t >= 0.0 && like_rate_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_slider_2.tStart = t;  // (not accounting for frame time here)
      like_rate_slider_2.frameNStart = frameN;  // exact frame index
      
      like_rate_slider_2.setAutoDraw(true);
    }

    
    // Check like_rate_slider_2 for response to end routine
    if (like_rate_slider_2.getRating() !== undefined && like_rate_slider_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *like_rate_image_2* updates
    if (t >= 0.0 && like_rate_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_image_2.tStart = t;  // (not accounting for frame time here)
      like_rate_image_2.frameNStart = frameN;  // exact frame index
      
      like_rate_image_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of like_rate_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function like_rate_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'like_rate_2' ---
    for (const thisComponent of like_rate_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from like_rate_code_2
    base_like = (base_like + 1);
    like_rate_track = (like_rate_track + 1);
    if ((base_like > 1)) {
        likeImage2 = "stim/hard_circ.png";
    }
    
    psychoJS.experiment.addData('like_rate_slider_2.response', like_rate_slider_2.getRating());
    psychoJS.experiment.addData('like_rate_slider_2.rt', like_rate_slider_2.getRT());
    // the Routine "like_rate_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _start_PRL_resp_allKeys;
var start_PRLComponents;
function start_PRLRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_PRL' ---
    t = 0;
    start_PRLClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    start_PRL_resp.keys = undefined;
    start_PRL_resp.rt = undefined;
    _start_PRL_resp_allKeys = [];
    // keep track of which components have finished
    start_PRLComponents = [];
    start_PRLComponents.push(start_PRL_text);
    start_PRLComponents.push(start_PRL_resp);
    start_PRLComponents.push(start_PRL_image);
    
    for (const thisComponent of start_PRLComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_PRLRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_PRL' ---
    // get current time
    t = start_PRLClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_PRL_text* updates
    if (t >= 0.0 && start_PRL_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_PRL_text.tStart = t;  // (not accounting for frame time here)
      start_PRL_text.frameNStart = frameN;  // exact frame index
      
      start_PRL_text.setAutoDraw(true);
    }

    
    // *start_PRL_resp* updates
    if (t >= 0.0 && start_PRL_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_PRL_resp.tStart = t;  // (not accounting for frame time here)
      start_PRL_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_PRL_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_PRL_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_PRL_resp.clearEvents(); });
    }

    if (start_PRL_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_PRL_resp.getKeys({keyList: ['space'], waitRelease: false});
      _start_PRL_resp_allKeys = _start_PRL_resp_allKeys.concat(theseKeys);
      if (_start_PRL_resp_allKeys.length > 0) {
        start_PRL_resp.keys = _start_PRL_resp_allKeys[_start_PRL_resp_allKeys.length - 1].name;  // just the last key pressed
        start_PRL_resp.rt = _start_PRL_resp_allKeys[_start_PRL_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *start_PRL_image* updates
    if (t >= 0.0 && start_PRL_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_PRL_image.tStart = t;  // (not accounting for frame time here)
      start_PRL_image.frameNStart = frameN;  // exact frame index
      
      start_PRL_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_PRLComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_PRLRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_PRL' ---
    for (const thisComponent of start_PRLComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_PRL_resp.corr, level);
    }
    psychoJS.experiment.addData('start_PRL_resp.keys', start_PRL_resp.keys);
    if (typeof start_PRL_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_PRL_resp.rt', start_PRL_resp.rt);
        routineTimer.reset();
        }
    
    start_PRL_resp.stop();
    // the Routine "start_PRL" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _startPRL1_key_resp_allKeys;
var start_PRL1Components;
function start_PRL1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_PRL1' ---
    t = 0;
    start_PRL1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    startPRL1_key_resp.keys = undefined;
    startPRL1_key_resp.rt = undefined;
    _startPRL1_key_resp_allKeys = [];
    // keep track of which components have finished
    start_PRL1Components = [];
    start_PRL1Components.push(start_PRL1_text);
    start_PRL1Components.push(startPRL1_key_resp);
    start_PRL1Components.push(ex_triangle);
    start_PRL1Components.push(ex_triangle_rew);
    start_PRL1Components.push(ex_star);
    start_PRL1Components.push(ex_star_rew);
    
    for (const thisComponent of start_PRL1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_PRL1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_PRL1' ---
    // get current time
    t = start_PRL1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_PRL1_text* updates
    if (t >= 0.0 && start_PRL1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_PRL1_text.tStart = t;  // (not accounting for frame time here)
      start_PRL1_text.frameNStart = frameN;  // exact frame index
      
      start_PRL1_text.setAutoDraw(true);
    }

    
    // *startPRL1_key_resp* updates
    if (t >= 0.0 && startPRL1_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startPRL1_key_resp.tStart = t;  // (not accounting for frame time here)
      startPRL1_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { startPRL1_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { startPRL1_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { startPRL1_key_resp.clearEvents(); });
    }

    if (startPRL1_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = startPRL1_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _startPRL1_key_resp_allKeys = _startPRL1_key_resp_allKeys.concat(theseKeys);
      if (_startPRL1_key_resp_allKeys.length > 0) {
        startPRL1_key_resp.keys = _startPRL1_key_resp_allKeys[_startPRL1_key_resp_allKeys.length - 1].name;  // just the last key pressed
        startPRL1_key_resp.rt = _startPRL1_key_resp_allKeys[_startPRL1_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *ex_triangle* updates
    if (t >= 0.0 && ex_triangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex_triangle.tStart = t;  // (not accounting for frame time here)
      ex_triangle.frameNStart = frameN;  // exact frame index
      
      ex_triangle.setAutoDraw(true);
    }

    
    // *ex_triangle_rew* updates
    if (t >= 0.0 && ex_triangle_rew.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex_triangle_rew.tStart = t;  // (not accounting for frame time here)
      ex_triangle_rew.frameNStart = frameN;  // exact frame index
      
      ex_triangle_rew.setAutoDraw(true);
    }

    
    // *ex_star* updates
    if (t >= 0.0 && ex_star.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex_star.tStart = t;  // (not accounting for frame time here)
      ex_star.frameNStart = frameN;  // exact frame index
      
      ex_star.setAutoDraw(true);
    }

    
    // *ex_star_rew* updates
    if (t >= 0.0 && ex_star_rew.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex_star_rew.tStart = t;  // (not accounting for frame time here)
      ex_star_rew.frameNStart = frameN;  // exact frame index
      
      ex_star_rew.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_PRL1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_PRL1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_PRL1' ---
    for (const thisComponent of start_PRL1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(startPRL1_key_resp.corr, level);
    }
    psychoJS.experiment.addData('startPRL1_key_resp.keys', startPRL1_key_resp.keys);
    if (typeof startPRL1_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('startPRL1_key_resp.rt', startPRL1_key_resp.rt);
        routineTimer.reset();
        }
    
    startPRL1_key_resp.stop();
    // the Routine "start_PRL1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _start_PRL_1_1_key_resp_allKeys;
var start_PRL1_1Components;
function start_PRL1_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_PRL1_1' ---
    t = 0;
    start_PRL1_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    start_PRL_1_1_key_resp.keys = undefined;
    start_PRL_1_1_key_resp.rt = undefined;
    _start_PRL_1_1_key_resp_allKeys = [];
    // keep track of which components have finished
    start_PRL1_1Components = [];
    start_PRL1_1Components.push(start_PRL_1_1_key_resp);
    start_PRL1_1Components.push(startPRL1_1_text);
    
    for (const thisComponent of start_PRL1_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_PRL1_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_PRL1_1' ---
    // get current time
    t = start_PRL1_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_PRL_1_1_key_resp* updates
    if (t >= 0.0 && start_PRL_1_1_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_PRL_1_1_key_resp.tStart = t;  // (not accounting for frame time here)
      start_PRL_1_1_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_PRL_1_1_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_PRL_1_1_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_PRL_1_1_key_resp.clearEvents(); });
    }

    if (start_PRL_1_1_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_PRL_1_1_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _start_PRL_1_1_key_resp_allKeys = _start_PRL_1_1_key_resp_allKeys.concat(theseKeys);
      if (_start_PRL_1_1_key_resp_allKeys.length > 0) {
        start_PRL_1_1_key_resp.keys = _start_PRL_1_1_key_resp_allKeys[_start_PRL_1_1_key_resp_allKeys.length - 1].name;  // just the last key pressed
        start_PRL_1_1_key_resp.rt = _start_PRL_1_1_key_resp_allKeys[_start_PRL_1_1_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *startPRL1_1_text* updates
    if (t >= 0.0 && startPRL1_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startPRL1_1_text.tStart = t;  // (not accounting for frame time here)
      startPRL1_1_text.frameNStart = frameN;  // exact frame index
      
      startPRL1_1_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_PRL1_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_PRL1_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_PRL1_1' ---
    for (const thisComponent of start_PRL1_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_PRL_1_1_key_resp.corr, level);
    }
    psychoJS.experiment.addData('start_PRL_1_1_key_resp.keys', start_PRL_1_1_key_resp.keys);
    if (typeof start_PRL_1_1_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_PRL_1_1_key_resp.rt', start_PRL_1_1_key_resp.rt);
        routineTimer.reset();
        }
    
    start_PRL_1_1_key_resp.stop();
    // the Routine "start_PRL1_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _start_PRL2_key_resp_allKeys;
var start_PRL_2Components;
function start_PRL_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_PRL_2' ---
    t = 0;
    start_PRL_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    start_PRL2_key_resp.keys = undefined;
    start_PRL2_key_resp.rt = undefined;
    _start_PRL2_key_resp_allKeys = [];
    // keep track of which components have finished
    start_PRL_2Components = [];
    start_PRL_2Components.push(start_PRL2_text);
    start_PRL_2Components.push(start_PRL2_key_resp);
    
    for (const thisComponent of start_PRL_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_PRL_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_PRL_2' ---
    // get current time
    t = start_PRL_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_PRL2_text* updates
    if (t >= 0.0 && start_PRL2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_PRL2_text.tStart = t;  // (not accounting for frame time here)
      start_PRL2_text.frameNStart = frameN;  // exact frame index
      
      start_PRL2_text.setAutoDraw(true);
    }

    
    // *start_PRL2_key_resp* updates
    if (t >= 0.0 && start_PRL2_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_PRL2_key_resp.tStart = t;  // (not accounting for frame time here)
      start_PRL2_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_PRL2_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_PRL2_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_PRL2_key_resp.clearEvents(); });
    }

    if (start_PRL2_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_PRL2_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _start_PRL2_key_resp_allKeys = _start_PRL2_key_resp_allKeys.concat(theseKeys);
      if (_start_PRL2_key_resp_allKeys.length > 0) {
        start_PRL2_key_resp.keys = _start_PRL2_key_resp_allKeys[_start_PRL2_key_resp_allKeys.length - 1].name;  // just the last key pressed
        start_PRL2_key_resp.rt = _start_PRL2_key_resp_allKeys[_start_PRL2_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_PRL_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_PRL_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_PRL_2' ---
    for (const thisComponent of start_PRL_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_PRL2_key_resp.corr, level);
    }
    psychoJS.experiment.addData('start_PRL2_key_resp.keys', start_PRL2_key_resp.keys);
    if (typeof start_PRL2_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_PRL2_key_resp.rt', start_PRL2_key_resp.rt);
        routineTimer.reset();
        }
    
    start_PRL2_key_resp.stop();
    // the Routine "start_PRL_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var q;
var probDist1_temp;
var probDist2_temp;
var probDist1_desc_temp;
var probDist2_desc_temp;
var reversal_arr;
var block_type;
var cue1;
var cue2;
var catch_images;
var catch_image_file;
var _new_block_key_resp_allKeys;
var startRLblockComponents;
function startRLblockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'startRLblock' ---
    t = 0;
    startRLblockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from RL_block_code
    
    q = 0;
    probDist1_temp=[];
    probDist2_temp=[];
    probDist1_desc_temp=[];
    probDist2_desc_temp=[];
    reversal_arr=[];
    console.log("reversal_arr1:   ", reversal_arr.toString());
    console.log(typeof reversal_arr);
    
    while ((q < 3)) {
        if ((q==0)){
            reversal_arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            prob_dist = prob_array[q];
        } else {
            if (q==1){
                reversal_arr=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                prob_dist = prob_array[q];
                }else{
                    reversal_arr=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    prob_dist = "last_15"
                    }
            }
        console.log("reversal_arr2:   ", reversal_arr.toString());
        //console.log(typeof reversal_arr);
        console.log(typeof reversal_arr[q]);
        console.log("q:   ", q.toString());
        console.log("prob_array:   ", prob_array.toString());
        console.log("prob_array:   ", prob_array[q].toString());
        
        
        console.log("prob_dist:   ", prob_dist.toString());
        if ((prob_dist === "12/18")) {
            probDist1_temp = moreRew_prob12.concat(lessRew_prob18);
            probDist1_desc_temp = moreRew_prob12_desc.concat(lessRew_prob18_desc);
            probDist2_temp = lessRew_prob12.concat(moreRew_prob18);
            probDist2_desc_temp = lessRew_prob12_desc.concat(moreRew_prob18_desc);
            reversal_arr[12] = 1;
        } else {
            if ((prob_dist === "13/17")) {
                probDist1_temp = moreRew_prob13.concat(lessRew_prob17);
                probDist1_desc_temp = moreRew_prob13_desc.concat(lessRew_prob17_desc);
                probDist2_temp = lessRew_prob13.concat(moreRew_prob17);
                probDist2_desc_temp = lessRew_prob13_desc.concat(moreRew_prob17_desc);
                reversal_arr[13] = 1;
            } else {
                if ((prob_dist === "14/16")) {
                    probDist1_temp = moreRew_prob14.concat(lessRew_prob16);
                    probDist1_desc_temp = moreRew_prob14_desc.concat(lessRew_prob16_desc);
                    probDist2_temp = lessRew_prob14.concat(moreRew_prob16);
                    probDist2_desc_temp = lessRew_prob14_desc.concat(moreRew_prob16_desc);
                    reversal_arr[14] = 1;
                } else {
                    if ((prob_dist === "15/15")) {
                        probDist1_temp = moreRew_prob15.concat(lessRew_prob15);
                        probDist1_desc_temp = moreRew_prob15_desc.concat(lessRew_prob15_desc);
                        probDist2_temp = lessRew_prob15.concat(moreRew_prob15);
                        probDist2_desc_temp = lessRew_prob15_desc.concat(moreRew_prob15_desc);
                        reversal_arr[15] = 1;
                    } else {
                        if ((prob_dist === "16/14")) {
                            probDist1_temp = moreRew_prob16.concat(lessRew_prob14);
                            probDist1_desc_temp = moreRew_prob16_desc.concat(lessRew_prob14_desc);
                            probDist2_temp = lessRew_prob16.concat(moreRew_prob14);
                            probDist2_desc_temp = lessRew_prob16_desc.concat(moreRew_prob14_desc);
                            reversal_arr[16] = 1;
                        } else {
                            if ((prob_dist === "17/13")) {
                                probDist1_temp = moreRew_prob17.concat(lessRew_prob13);
                                probDist1_desc_temp = moreRew_prob17_desc.concat(lessRew_prob13_desc);
                                probDist2_temp = lessRew_prob17.concat(moreRew_prob13);
                                probDist2_desc_temp = lessRew_prob17_desc.concat(moreRew_prob13_desc);
                                reversal_arr[17] = 1;
                            } else {
                                if((prob_dist === "18/12")) {
                                    probDist1_temp = moreRew_prob18.concat(lessRew_prob12);
                                    probDist1_desc_temp = moreRew_prob18_desc.concat(lessRew_prob12_desc);
                                    probDist2_temp = lessRew_prob18.concat(moreRew_prob12);
                                    probDist2_desc_temp = lessRew_prob18_desc.concat(moreRew_prob12_desc);
                                    reversal_arr[18] = 1;
                                    } else{
                                           probDist1_temp= moreRew_last15;
                                           probDist1_desc_temp= moreRew_last15_desc;
                                           probDist2_temp= lessRew_prob15; 
                                           probDist2_desc_temp= lessRew_prob15_desc;
                                        }
                            }
                        }
                    }
                }
            }
        }
        probDist1 = probDist1.concat(probDist1_temp);
        probDist1_desc = probDist1_desc.concat(probDist1_desc_temp);
        probDist2 = probDist2.concat(probDist2_temp);
        probDist2_desc = probDist2_desc.concat(probDist2_desc_temp);
        r_arr=r_arr.concat(reversal_arr);
        q = (q + 1);
    }
    
    
    
    block_type = block_array[block_i];
    if ((block_array[block_i] === "easy")) {
        effCal = "stim/easy_blue_circ.png";
        cue1 = low_eff_cue1;
        cue2 = low_eff_cue2;
        catch_images=[low_eff_cue1, low_eff_cue1, low_eff_cue2, low_eff_cue2];
        start_block_text="In this block, you will play the game with only blue numbers.\n\n\n\n\n\n\n\n\nPress the space bar when you are ready to start.";
    } else {
        effCal = "stim/hard_circ.png";
        cue1 = high_eff_cue1;
        cue2 = high_eff_cue2;
        catch_images=[high_eff_cue1, high_eff_cue1, high_eff_cue2, high_eff_cue2];
        start_block_text="In this block, you will play the game with both blue and yellow numbers.\n\n\n\n\n\n\n\n\nPress the space bar when you are ready to start.";
    }
    
    
    util.shuffle(catch_images);
    catch_image_file=catch_images[0];
    catch_track_block=0;
    
    console.log("block_i:   ", block_i.toString());
    console.log("block_type:   ", block_type.toString());
    console.log("probability distribution 1:   ", probDist1.toString());
    console.log("probability distribution 2:   ", probDist2.toString());
    console.log("cue 1:   ", cue1.toString());
    trial_counter = 0;
    catch_on=0;
    
    new_block_text.setText(start_block_text);
    new_block_key_resp.keys = undefined;
    new_block_key_resp.rt = undefined;
    _new_block_key_resp_allKeys = [];
    image.setImage(effCal);
    // keep track of which components have finished
    startRLblockComponents = [];
    startRLblockComponents.push(new_block_text);
    startRLblockComponents.push(new_block_key_resp);
    startRLblockComponents.push(image);
    
    for (const thisComponent of startRLblockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function startRLblockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'startRLblock' ---
    // get current time
    t = startRLblockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *new_block_text* updates
    if (t >= 0.0 && new_block_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      new_block_text.tStart = t;  // (not accounting for frame time here)
      new_block_text.frameNStart = frameN;  // exact frame index
      
      new_block_text.setAutoDraw(true);
    }

    
    // *new_block_key_resp* updates
    if (t >= 0.0 && new_block_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      new_block_key_resp.tStart = t;  // (not accounting for frame time here)
      new_block_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { new_block_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { new_block_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { new_block_key_resp.clearEvents(); });
    }

    if (new_block_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = new_block_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _new_block_key_resp_allKeys = _new_block_key_resp_allKeys.concat(theseKeys);
      if (_new_block_key_resp_allKeys.length > 0) {
        new_block_key_resp.keys = _new_block_key_resp_allKeys[_new_block_key_resp_allKeys.length - 1].name;  // just the last key pressed
        new_block_key_resp.rt = _new_block_key_resp_allKeys[_new_block_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of startRLblockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startRLblockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'startRLblock' ---
    for (const thisComponent of startRLblockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(new_block_key_resp.corr, level);
    }
    psychoJS.experiment.addData('new_block_key_resp.keys', new_block_key_resp.keys);
    if (typeof new_block_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('new_block_key_resp.rt', new_block_key_resp.rt);
        routineTimer.reset();
        }
    
    new_block_key_resp.stop();
    // the Routine "startRLblock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var catch_fix_2Components;
function catch_fix_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'catch_fix_2' ---
    t = 0;
    catch_fix_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    catch_fix_2Components = [];
    catch_fix_2Components.push(catch_fix_2_text);
    
    for (const thisComponent of catch_fix_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function catch_fix_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'catch_fix_2' ---
    // get current time
    t = catch_fix_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *catch_fix_2_text* updates
    if (t >= 0.0 && catch_fix_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch_fix_2_text.tStart = t;  // (not accounting for frame time here)
      catch_fix_2_text.frameNStart = frameN;  // exact frame index
      
      catch_fix_2_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (catch_fix_2_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      catch_fix_2_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of catch_fix_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function catch_fix_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'catch_fix_2' ---
    for (const thisComponent of catch_fix_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var corr_catch_ans;
var _catch_key_resp_allKeys;
var catch_trial_imageComponents;
function catch_trial_imageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'catch_trial_image' ---
    t = 0;
    catch_trial_imageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    catch_image.setImage(catch_image_file);
    // Run 'Begin Routine' code from code
    if ((catch_image_file === cue1)) {
        corr_catch_ans = "1";
    } else {
        corr_catch_ans = "2";
    }
    
    CatchCue1.setImage(cue1);
    CatchCue2.setImage(cue2);
    catch_key_resp.keys = undefined;
    catch_key_resp.rt = undefined;
    _catch_key_resp_allKeys = [];
    // keep track of which components have finished
    catch_trial_imageComponents = [];
    catch_trial_imageComponents.push(catch_image);
    catch_trial_imageComponents.push(catch_fix);
    catch_trial_imageComponents.push(catch_trial_question);
    catch_trial_imageComponents.push(CatchCue1);
    catch_trial_imageComponents.push(CatchCue2);
    catch_trial_imageComponents.push(catch_key_resp);
    
    for (const thisComponent of catch_trial_imageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function catch_trial_imageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'catch_trial_image' ---
    // get current time
    t = catch_trial_imageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *catch_image* updates
    if (t >= 0.0 && catch_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch_image.tStart = t;  // (not accounting for frame time here)
      catch_image.frameNStart = frameN;  // exact frame index
      
      catch_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (catch_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      catch_image.setAutoDraw(false);
    }
    
    // *catch_fix* updates
    if (t >= 1 && catch_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch_fix.tStart = t;  // (not accounting for frame time here)
      catch_fix.frameNStart = frameN;  // exact frame index
      
      catch_fix.setAutoDraw(true);
    }

    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (catch_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      catch_fix.setAutoDraw(false);
    }
    
    // *catch_trial_question* updates
    if (t >= 1.5 && catch_trial_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch_trial_question.tStart = t;  // (not accounting for frame time here)
      catch_trial_question.frameNStart = frameN;  // exact frame index
      
      catch_trial_question.setAutoDraw(true);
    }

    
    // *CatchCue1* updates
    if (t >= 1.5 && CatchCue1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CatchCue1.tStart = t;  // (not accounting for frame time here)
      CatchCue1.frameNStart = frameN;  // exact frame index
      
      CatchCue1.setAutoDraw(true);
    }

    
    // *CatchCue2* updates
    if (t >= 1.5 && CatchCue2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CatchCue2.tStart = t;  // (not accounting for frame time here)
      CatchCue2.frameNStart = frameN;  // exact frame index
      
      CatchCue2.setAutoDraw(true);
    }

    
    // *catch_key_resp* updates
    if (t >= 1.5 && catch_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catch_key_resp.tStart = t;  // (not accounting for frame time here)
      catch_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { catch_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { catch_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { catch_key_resp.clearEvents(); });
    }

    if (catch_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = catch_key_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _catch_key_resp_allKeys = _catch_key_resp_allKeys.concat(theseKeys);
      if (_catch_key_resp_allKeys.length > 0) {
        catch_key_resp.keys = _catch_key_resp_allKeys[_catch_key_resp_allKeys.length - 1].name;  // just the last key pressed
        catch_key_resp.rt = _catch_key_resp_allKeys[_catch_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (catch_key_resp.keys == corr_catch_ans) {
            catch_key_resp.corr = 1;
        } else {
            catch_key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of catch_trial_imageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function catch_trial_imageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'catch_trial_image' ---
    for (const thisComponent of catch_trial_imageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code
    psychoJS.experiment.addData("eff_cond", cond);
    psychoJS.experiment.addData("EffTask", task);
    psychoJS.experiment.addData("Block", (block_i + 1));
    psychoJS.experiment.addData("BlockTrial", (trial_counter + 1));
    psychoJS.experiment.addData("BlockCatchTrial", (catch_track_block + 1));
    psychoJS.experiment.addData("CatchTrial", (catch_track + 1));
    catch_track = (catch_track + 1);
    catch_track_block = (catch_track_block + 1);
    catch_image_file = catch_images[catch_track_block];
    
    // was no response the correct answer?!
    if (catch_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_catch_ans)) {
         catch_key_resp.corr = 1;  // correct non-response
      } else {
         catch_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(catch_key_resp.corr, level);
    }
    psychoJS.experiment.addData('catch_key_resp.keys', catch_key_resp.keys);
    psychoJS.experiment.addData('catch_key_resp.corr', catch_key_resp.corr);
    if (typeof catch_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('catch_key_resp.rt', catch_key_resp.rt);
        routineTimer.reset();
        }
    
    catch_key_resp.stop();
    // the Routine "catch_trial_image" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var RewCue1_pos_str;
var RewCue2_pos_str;
var _RL_key_resp_allKeys;
var RL_choiceComponents;
function RL_choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RL_choice' ---
    t = 0;
    RL_choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from ShuffleCues_code
    util.shuffle(cuepos);
    if ((cuepos[0] === 1)) {
        RewCue1_pos = [(- 0.2), 0];
        RewCue1_pos_str = "left";
        RewCue2_pos = [0.2, 0];
        RewCue2_pos_str = "right";
    } else {
        if ((cuepos[0] === 2)) {
            RewCue1_pos = [0.2, 0];
            RewCue1_pos_str = "right";
            RewCue2_pos = [(- 0.2), 0];
            RewCue2_pos_str = "left";
        }
    }
    
    RL_key_resp.keys = undefined;
    RL_key_resp.rt = undefined;
    _RL_key_resp_allKeys = [];
    RewCue1.setPos(RewCue1_pos);
    RewCue1.setImage(cue1);
    RewCue2.setPos(RewCue2_pos);
    RewCue2.setImage(cue2);
    // keep track of which components have finished
    RL_choiceComponents = [];
    RL_choiceComponents.push(RL_key_resp);
    RL_choiceComponents.push(RewCue1);
    RL_choiceComponents.push(RewCue2);
    RL_choiceComponents.push(RL_choice_fix);
    
    for (const thisComponent of RL_choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RL_choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RL_choice' ---
    // get current time
    t = RL_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RL_key_resp* updates
    if (t >= 1 && RL_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RL_key_resp.tStart = t;  // (not accounting for frame time here)
      RL_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { RL_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { RL_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { RL_key_resp.clearEvents(); });
    }

    frameRemains = 1 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RL_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RL_key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (RL_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = RL_key_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _RL_key_resp_allKeys = _RL_key_resp_allKeys.concat(theseKeys);
      if (_RL_key_resp_allKeys.length > 0) {
        RL_key_resp.keys = _RL_key_resp_allKeys[_RL_key_resp_allKeys.length - 1].name;  // just the last key pressed
        RL_key_resp.rt = _RL_key_resp_allKeys[_RL_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *RewCue1* updates
    if (t >= 1 && RewCue1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RewCue1.tStart = t;  // (not accounting for frame time here)
      RewCue1.frameNStart = frameN;  // exact frame index
      
      RewCue1.setAutoDraw(true);
    }

    frameRemains = 1 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RewCue1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RewCue1.setAutoDraw(false);
    }
    
    // *RewCue2* updates
    if (t >= 1 && RewCue2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RewCue2.tStart = t;  // (not accounting for frame time here)
      RewCue2.frameNStart = frameN;  // exact frame index
      
      RewCue2.setAutoDraw(true);
    }

    frameRemains = 1 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RewCue2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RewCue2.setAutoDraw(false);
    }
    
    // *RL_choice_fix* updates
    if (t >= 0.0 && RL_choice_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RL_choice_fix.tStart = t;  // (not accounting for frame time here)
      RL_choice_fix.frameNStart = frameN;  // exact frame index
      
      RL_choice_fix.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RL_choice_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RL_choice_fix.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RL_choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var cue1_outcome;
var cue1_outcome_desc;
var cue2_outcome;
var cue2_outcome_desc;
function RL_choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RL_choice' ---
    for (const thisComponent of RL_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from ShuffleCues_code
    cue1_outcome = probDist1[trial_counter];
    cue1_outcome_desc = probDist1_desc[trial_counter];
    cue2_outcome = probDist2[trial_counter];
    cue2_outcome_desc = probDist2_desc[trial_counter];
    
    if (((trial_counter === 12) || (trial_counter === 24) || (trial_counter === 36) || (trial_counter === 48))) {
        catch_on = 1;
        console.log("inhere!!");
    } else {
        catch_on = 0;
    }
    console.log("trial_counter    ", trial_counter.toString());
    console.log("catch on    ", catch_on.toString());
    
    
    reversal_trial=r_arr[trial_counter];
    if (reversal_trial==1){
        subBlockTrial=1;
        he_choice_after_rev=0;
    }
    
    if (RL_key_resp.keys) {
        if ((RL_key_resp.keys[0] === '1')) {
            if ((RewCue1_pos_str === "left")) {
                rl_outcome = cue1_outcome;
                rl_choice = cue1_outcome_desc;
                selected_cue=cue1;
                choice_a=1;
            } else {
                rl_outcome = cue2_outcome;
                rl_choice = cue2_outcome_desc;
                selected_cue=cue2;
                choice_a=2;
            }
        } else {
            if ((RewCue1_pos_str === "right")) {
                rl_outcome = cue1_outcome;
                rl_choice = cue1_outcome_desc;
                selected_cue=cue1;
                choice_a=1;
            } else {
                rl_outcome = cue2_outcome;
                rl_choice = cue2_outcome_desc;
                selected_cue=cue2;
                choice_a=2;
            }
        }
    
    } else {
        if ((! RL_key_resp.keys)) {
            faster_loop = 1;
            rl_outcome = (- 99);
            rl_choice = "no_choice";
            selected_cue="none";
            choice_a=-99;
        }
    }
    
    if (rl_choice=="highRewP"){
        he_choice_after_rev=he_choice_after_rev+1
    }
    
    if (subBlockTrial<6){
        if(rl_choice=="lowRewP"){
            rl_outcome=0;
         } else{
            if (rl_choice=="highRewP" && he_choice_after_rev==1){
                rl_outcome=1;
            }
         }
    }
    
    
    psychoJS.experiment.addData("eff_cond", block_type);
    psychoJS.experiment.addData("Block", (block_i + 1));
    psychoJS.experiment.addData("BlockTrial", (trial_counter + 1));
    psychoJS.experiment.addData("SubBlockTrial", subBlockTrial);
    psychoJS.experiment.addData("RL_Choice", rl_choice);
    psychoJS.experiment.addData("RL_Outcome", rl_outcome);
    psychoJS.experiment.addData("Choice_a", choice_a);
    psychoJS.experiment.addData("Selected_Cue", selected_cue);
    
    psychoJS.experiment.addData("Reversal", reversal_trial);
    
    if ((rl_outcome === 0) || (rl_outcome === 1)) {
        faster_loop=0;
        effortRew_loop=1;
    } else {
            rew = 0;
            faster_loop=1;
            effortRew_loop=0;
            trial_counter=trial_counter+1;
            subBlockTrial=subBlockTrial+1;
    }
    
    psychoJS.experiment.addData("Trial", all_trial_counter);
    all_trial_counter=all_trial_counter+1;
    
    
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(RL_key_resp.corr, level);
    }
    psychoJS.experiment.addData('RL_key_resp.keys', RL_key_resp.keys);
    if (typeof RL_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('RL_key_resp.rt', RL_key_resp.rt);
        routineTimer.reset();
        }
    
    RL_key_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Faster_routineComponents;
function Faster_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Faster_routine' ---
    t = 0;
    Faster_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Faster_routineComponents = [];
    Faster_routineComponents.push(faster_choice_text);
    
    for (const thisComponent of Faster_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Faster_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Faster_routine' ---
    // get current time
    t = Faster_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *faster_choice_text* updates
    if (t >= 0.0 && faster_choice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      faster_choice_text.tStart = t;  // (not accounting for frame time here)
      faster_choice_text.frameNStart = frameN;  // exact frame index
      
      faster_choice_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (faster_choice_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      faster_choice_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Faster_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Faster_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Faster_routine' ---
    for (const thisComponent of Faster_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var iti_fix2Components;
function iti_fix2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'iti_fix2' ---
    t = 0;
    iti_fix2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from start_trial_code
    cond = block_array[block_i];
    ncorrectAns = 0;
    nincorrAns = 0;
    ReacTime = [];
    if ((cond === "easy")) {
        task = 2;
        nEasy = (nEasy + 1);
        effCal = "stim/easy_blue_circ.png";
    } else {
        if ((cond === "hard")) {
            util.shuffle(subtasks);
            k = 0;
            nHard = (nHard + 1);
            effCal = "stim/hard_circ.png";
        }
    }
    console.log("subtask in EffCue_code:    ", subtasks.toString());
    psychoJS.experiment.addData("eff_cond", cond);
    psychoJS.experiment.addData("Block", (block_i + 1));
    psychoJS.experiment.addData("BlockTrial", (trial_counter + 1));
    
    
    
    
    // keep track of which components have finished
    iti_fix2Components = [];
    iti_fix2Components.push(iti_fix_text);
    
    for (const thisComponent of iti_fix2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function iti_fix2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'iti_fix2' ---
    // get current time
    t = iti_fix2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *iti_fix_text* updates
    if (t >= 0.0 && iti_fix_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iti_fix_text.tStart = t;  // (not accounting for frame time here)
      iti_fix_text.frameNStart = frameN;  // exact frame index
      
      iti_fix_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (iti_fix_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      iti_fix_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of iti_fix2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function iti_fix2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'iti_fix2' ---
    for (const thisComponent of iti_fix2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from start_trial_code
    startTime = globalClock.getTime();
    console.log(startTime.toString());
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _effTask_resp_allKeys;
var effTrialComponents;
function effTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'effTrial' ---
    t = 0;
    effTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from effTask_code
    if ((cond === "hard")) {
        task = subtasks[k];
        if ((k === 0)) {
            k = 1;
        } else {
            if ((k === 1)) {
                k = 0;
            }
        }
    }
    if ((task === 1)) {
        effTask_number.color = [1, 1, (- 1)];
        correctAns = task1;
        col = "yellow";
    } else {
        if ((task === 2)) {
            effTask_number.color = [(- 1), (- 1), 1];
            correctAns = task2;
            col = "blue";
        }
    }
    console.log("subtask in effTask_code:    ", subtasks.toString());
    console.log("condition:    ", cond.toString());
    console.log("task:    ", task.toString());
    console.log("color:    ", col);
    console.log("color:    ", effTask_number.color.toString());
    psychoJS.experiment.addData("eff_cond", cond);
    psychoJS.experiment.addData("EffTask", task);
    psychoJS.experiment.addData("Block", (block_i + 1));
    psychoJS.experiment.addData("BlockTrial", (trial_counter + 1));
    psychoJS.experiment.addData("SubBlockTrial", subBlockTrial);
    psychoJS.experiment.addData("numColor", col);
    psychoJS.experiment.addData("Trial", all_trial_counter);
    
    effTask_number.setText(number);
    effTask_resp.keys = undefined;
    effTask_resp.rt = undefined;
    _effTask_resp_allKeys = [];
    // keep track of which components have finished
    effTrialComponents = [];
    effTrialComponents.push(effTask_number);
    effTrialComponents.push(effTask_resp);
    
    for (const thisComponent of effTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function effTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'effTrial' ---
    // get current time
    t = effTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from effTask_code
    if (((globalClock.getTime() - startTime) >= 6)) {
        continueRoutine = false;
        eff_trial.finished = true;
    }
    
    
    // *effTask_number* updates
    if (t >= 0.0 && effTask_number.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effTask_number.tStart = t;  // (not accounting for frame time here)
      effTask_number.frameNStart = frameN;  // exact frame index
      
      effTask_number.setAutoDraw(true);
    }

    
    // *effTask_resp* updates
    if (t >= 0.0 && effTask_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effTask_resp.tStart = t;  // (not accounting for frame time here)
      effTask_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { effTask_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { effTask_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { effTask_resp.clearEvents(); });
    }

    if (effTask_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = effTask_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _effTask_resp_allKeys = _effTask_resp_allKeys.concat(theseKeys);
      if (_effTask_resp_allKeys.length > 0) {
        effTask_resp.keys = _effTask_resp_allKeys[_effTask_resp_allKeys.length - 1].name;  // just the last key pressed
        effTask_resp.rt = _effTask_resp_allKeys[_effTask_resp_allKeys.length - 1].rt;
        // was this correct?
        if (effTask_resp.keys == correctAns) {
            effTask_resp.corr = 1;
        } else {
            effTask_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of effTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function effTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'effTrial' ---
    for (const thisComponent of effTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from effTask_code
    if (effTask_resp.keys) {
        if ((effTask_resp.corr === 1)) {
            ncorrectAns = (ncorrectAns + 1);
            ReacTime.push(effTask_resp.rt);
        } else {
            if ((effTask_resp.corr === 0)) {
                nincorrAns = (nincorrAns + 1);
            }
        }
    }
    
    // was no response the correct answer?!
    if (effTask_resp.keys === undefined) {
      if (['None','none',undefined].includes(correctAns)) {
         effTask_resp.corr = 1;  // correct non-response
      } else {
         effTask_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(effTask_resp.corr, level);
    }
    psychoJS.experiment.addData('effTask_resp.keys', effTask_resp.keys);
    psychoJS.experiment.addData('effTask_resp.corr', effTask_resp.corr);
    if (typeof effTask_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('effTask_resp.rt', effTask_resp.rt);
        routineTimer.reset();
        }
    
    effTask_resp.stop();
    // the Routine "effTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fix_num_2Components;
function fix_num_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix_num_2' ---
    t = 0;
    fix_num_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fix_num_2Components = [];
    fix_num_2Components.push(fix_num_blank_2);
    
    for (const thisComponent of fix_num_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fix_num_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix_num_2' ---
    // get current time
    t = fix_num_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_num_blank_2* updates
    if (t >= 0.0 && fix_num_blank_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_num_blank_2.tStart = t;  // (not accounting for frame time here)
      fix_num_blank_2.frameNStart = frameN;  // exact frame index
      
      fix_num_blank_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_num_blank_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_num_blank_2.setAutoDraw(false);
    }
    // Run 'Each Frame' code from time_out_code
    if (((globalClock.getTime() - startTime) >= 6)) {
        continueRoutine = false;
        eff_trial.finished = true;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix_num_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_num_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix_num_2' ---
    for (const thisComponent of fix_num_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rl_fb_color;
var rew;
var rew_str;
var effFeedbackComponents;
function effFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'effFeedback' ---
    t = 0;
    effFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from effFeedback_code
    A = [];
    rts = [];
    console.log("rl choice   ", rl_choice.toString());
    if (((ncorrectAns >= (0 & nincorrAns)) && ((0 & nincorrAns) >= 0))) {
        if ((ncorrectAns > 0)) {
            MRT = (Math.round(((util.sum(ReacTime) / ncorrectAns) * 100)) / 100);
        } else {
            MRT = 100;
        }
        if ((nincorrAns > 2)) {
            if ((cond === "easy")) {
                thisTR = [4, MRT];
                respEasy.push(thisTR);
                accuracyEasy.push(0);
            } else {
                if ((cond === "hard")) {
                    thisTR = [3, MRT];
                    respHard.push(thisTR);
                    accuracyHard.push(0);
                }
            }
            fbImage = "stim/x_mark.png";
            Feedback = 0;
        } else {
            if ((nincorrAns <= 2)) {
                if (((cond === "easy") && (ncorrectAns >= 4))) {
                    thisTR = [ncorrectAns, MRT];
                    respEasy.push(thisTR);
                    nEasyCorr = (nEasyCorr + 1);
                    if ((nEasyCorr > trthr)) {
                        A = respEasy.slice(((nEasyCorr - trthr) - 1), (nEasyCorr - 1));
                        A.sort();
                        thr_ncc = A[1][0];
                        if ((A[0][0] === thr_ncc)) {
                            idx = [];
                            for (var i, _pj_c = 0, _pj_a = util.range(A.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                                i = _pj_a[_pj_c];
                                if ((A[i][0] === thr_ncc)) {
                                    idx.push(i);
                                }
                            }
                            rts = [];
                            for (var i, _pj_c = 0, _pj_a = util.range(idx.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                                i = _pj_a[_pj_c];
                                rts.push(A[idx[i]][1]);
                            }
                            rts.sort();
                            thr_rt = rts.slice((- 2))[0];
                        } else {
                            if ((A[0][0] < thr_ncc)) {
                                thr_rt = 100;
                            }
                        }
                        cutEasy = [];
                        cutEasy.push(thr_ncc);
                        cutEasy.push(thr_rt);
                    }
                    if ((((ncorrectAns > cutEasy[0]) || ((ncorrectAns === cutEasy[0]) && (cutEasy[1] === 100))) || (((ncorrectAns === cutEasy[0]) && (cutEasy[1] < 100)) && (MRT <= cutEasy[1])))) {
                        Feedback = 1;
                        fbImage = "stim/check_mark.png";
                        accuracyEasy.push(1);
                    } else {
                        if (((ncorrectAns < cutEasy[0]) || (((ncorrectAns === cutEasy[0]) && (cutEasy[1] < 100)) && (MRT > cutEasy[1])))) {
                            Feedback = 0;
                            fbImage = "stim/x_mark.png";
                            accuracyEasy.push(0);
                        }
                    }
                } else {
                    if (((cond === "easy") && (ncorrectAns < 4))) {
                        thisTR = [4, MRT];
                        respEasy.push(thisTR);
                        Feedback = 0;
                        fbImage = "stim/x_mark.png";
                        accuracyEasy.push(0);
                    } else {
                        if (((cond === "hard") && (ncorrectAns >= 3))) {
                            thisTR = [ncorrectAns, MRT];
                            respHard.push(thisTR);
                            nHardCorr = (nHardCorr + 1);
                            if ((nHardCorr > trthr)) {
                                A = respHard.slice(((nHardCorr - trthr) - 1), (nHardCorr - 1));
                                A.sort();
                                thr_ncc = A[1][0];
                                if ((A[0][0] === thr_ncc)) {
                                    idx = [];
                                    for (var i, _pj_c = 0, _pj_a = util.range(A.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                                        i = _pj_a[_pj_c];
                                        if ((A[i][0] === thr_ncc)) {
                                            idx.push(i);
                                        }
                                    }
                                    rts = [];
                                    for (var i, _pj_c = 0, _pj_a = util.range(idx.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                                        i = _pj_a[_pj_c];
                                        rts.push(A[idx[i]][1]);
                                    }
                                    rts.sort();
                                    thr_rt = rts.slice((- 2))[0];
                                } else {
                                    if ((A[0][0] < thr_ncc)) {
                                        thr_rt = 100;
                                    }
                                }
                                cutHard = [];
                                cutHard.push(thr_ncc);
                                cutHard.push(thr_rt);
                            }
                            if ((((ncorrectAns > cutHard[0]) || ((ncorrectAns === cutHard[0]) && (cutHard[1] === 100))) || (((ncorrectAns === cutHard[0]) && (cutHard[1] < 100)) && (MRT <= cutHard[1])))) {
                                Feedback = 1;
                                fbImage = "stim/check_mark.png";
                                accuracyHard.push(1);
                            } else {
                                if (((ncorrectAns < cutHard[0]) || (((ncorrectAns === cutHard[0]) && (cutHard[1] < 100)) && (MRT > cutHard[1])))) {
                                    Feedback = 0;
                                    fbImage = "stim/x_mark.png";
                                    accuracyHard.push(0);
                                }
                            }
                        } else {
                            if (((cond === "hard") && (ncorrectAns < 3))) {
                                thisTR = [3, MRT];
                                respHard.push(thisTR);
                                Feedback = 0;
                                fbImage = "stim/x_mark.png";
                                accuracyHard.push(0);
                            }
                        }
                    }
                }
            }
        }
    } else {
        if ((cond === "easy")) {
            thisTR = [4, MRT];
            respEasy.push(thisTR);
            accuracyEasy.push(0);
        } else {
            if ((cond === "hard")) {
                thisTR = [3, MRT];
                respHard.push(thisTR);
                accuracyHard.push(0);
            }
        }
        Feedback = 0;
        fbImage = "stim/x_mark.png";
    }
    if ((Feedback === 0)) {
        rl_fb_color = "red";
        rew = 0;
        if ((rl_outcome === 1)) {
            rew_str = "5";
        } else {
            rew_str = "0";
        }
    } else {
        rl_fb_color = "green";
        if ((rl_outcome === 1)) {
            rew = 5;
            rew_str = "5";
        } else {
            rew = 0;
            rew_str = "0";
        }
    }
    points = (points + rew);
    psychoJS.experiment.addData("Fdbk_Eff", Feedback);
    psychoJS.experiment.addData("Thr_nC_cal", thr_ncc);
    psychoJS.experiment.addData("Thr_RT_cal", thr_rt);
    psychoJS.experiment.addData("RL_Choice", rl_choice);
    psychoJS.experiment.addData("RL_Outcome", rl_outcome);
    psychoJS.experiment.addData("Choice_a", choice_a);
    psychoJS.experiment.addData("Selected_Cue", selected_cue);
    psychoJS.experiment.addData("Reward", rew);
    psychoJS.experiment.addData("TotPoints", points);
    psychoJS.experiment.addData("eff_cond", cond);
    psychoJS.experiment.addData("Block", (block_i + 1));
    psychoJS.experiment.addData("BlockTrial", (trial_counter + 1));
    psychoJS.experiment.addData("SubBlockTrial", subBlockTrial);
    psychoJS.experiment.addData("Trial", all_trial_counter);
    psychoJS.experiment.addData("Reversal", reversal_trial);
    if ((cond === "easy")) {
        if ((accuracyEasy.length > 0)) {
            PCTCOR = (Math.round(((util.sum(accuracyEasy) / accuracyEasy.length) * 100)) / 100);
            psychoJS.experiment.addData("pct_corrEasy", PCTCOR);
        }
    } else {
        if ((cond === "hard")) {
            if ((accuracyHard.length > 0)) {
                PCTCOR = (Math.round(((util.sum(accuracyHard) / accuracyHard.length) * 100)) / 100);
                psychoJS.experiment.addData("pct_corrHard", PCTCOR);
                psychoJS.experiment.addData("pct_corrEasy", (- 99));
            }
        }
    }
    trial_counter = (trial_counter + 1);
    subBlockTrial = (subBlockTrial + 1);
    
    effFeedback_image.setImage(fbImage);
    // keep track of which components have finished
    effFeedbackComponents = [];
    effFeedbackComponents.push(effFeedback_image);
    effFeedbackComponents.push(effFeedback_fix);
    
    for (const thisComponent of effFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function effFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'effFeedback' ---
    // get current time
    t = effFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *effFeedback_image* updates
    if (t >= 0.5 && effFeedback_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effFeedback_image.tStart = t;  // (not accounting for frame time here)
      effFeedback_image.frameNStart = frameN;  // exact frame index
      
      effFeedback_image.setAutoDraw(true);
    }

    frameRemains = 0.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (effFeedback_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      effFeedback_image.setAutoDraw(false);
    }
    
    // *effFeedback_fix* updates
    if (t >= 0.0 && effFeedback_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effFeedback_fix.tStart = t;  // (not accounting for frame time here)
      effFeedback_fix.frameNStart = frameN;  // exact frame index
      
      effFeedback_fix.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (effFeedback_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      effFeedback_fix.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of effFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function effFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'effFeedback' ---
    for (const thisComponent of effFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var RL_feedbackComponents;
function RL_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RL_feedback' ---
    t = 0;
    RL_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    selected_cue_image.setImage(selected_cue);
    rl_feedback_text.setColor(new util.Color(rl_fb_color));
    rl_feedback_text.setText(rew_str);
    // keep track of which components have finished
    RL_feedbackComponents = [];
    RL_feedbackComponents.push(selected_cue_image);
    RL_feedbackComponents.push(rl_feedback_text);
    
    for (const thisComponent of RL_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RL_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RL_feedback' ---
    // get current time
    t = RL_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *selected_cue_image* updates
    if (t >= 0.0 && selected_cue_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selected_cue_image.tStart = t;  // (not accounting for frame time here)
      selected_cue_image.frameNStart = frameN;  // exact frame index
      
      selected_cue_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (selected_cue_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      selected_cue_image.setAutoDraw(false);
    }
    
    // *rl_feedback_text* updates
    if (t >= 0.0 && rl_feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rl_feedback_text.tStart = t;  // (not accounting for frame time here)
      rl_feedback_text.frameNStart = frameN;  // exact frame index
      
      rl_feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rl_feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rl_feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RL_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RL_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RL_feedback' ---
    for (const thisComponent of RL_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rewStim;
var rewStimLabel;
var _end_block_key_resp_allKeys;
var endBlockComponents;
function endBlockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endBlock' ---
    t = 0;
    endBlockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    endBlock_text.setText((("Well done! You have collected " + points.toString()) + " so far!\n\n\nPress space to continue."));
    // Run 'Begin Routine' code from endBlock_code
    console.log("end of block. Setting new values");
    block_i = (block_i + 1);
    stim_block_loop = 0;
    psychoJS.experiment.addData("Points_cal", points);
    if ((cond === "easy")) {
        rewStim = rewStim_array[0];
        rewStimLabel = rewStimLabel_array[0];
    } else {
        rewStim = rewStim_array[2];
        rewStimLabel = rewStimLabel_array[2];
    }
    
    end_block_key_resp.keys = undefined;
    end_block_key_resp.rt = undefined;
    _end_block_key_resp_allKeys = [];
    // keep track of which components have finished
    endBlockComponents = [];
    endBlockComponents.push(endBlock_text);
    endBlockComponents.push(end_block_key_resp);
    
    for (const thisComponent of endBlockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endBlockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endBlock' ---
    // get current time
    t = endBlockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endBlock_text* updates
    if (t >= 0.0 && endBlock_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endBlock_text.tStart = t;  // (not accounting for frame time here)
      endBlock_text.frameNStart = frameN;  // exact frame index
      
      endBlock_text.setAutoDraw(true);
    }

    
    // *end_block_key_resp* updates
    if (t >= 0.0 && end_block_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_block_key_resp.tStart = t;  // (not accounting for frame time here)
      end_block_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_block_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_block_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_block_key_resp.clearEvents(); });
    }

    if (end_block_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_block_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _end_block_key_resp_allKeys = _end_block_key_resp_allKeys.concat(theseKeys);
      if (_end_block_key_resp_allKeys.length > 0) {
        end_block_key_resp.keys = _end_block_key_resp_allKeys[_end_block_key_resp_allKeys.length - 1].name;  // just the last key pressed
        end_block_key_resp.rt = _end_block_key_resp_allKeys[_end_block_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endBlockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endBlockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endBlock' ---
    for (const thisComponent of endBlockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_block_key_resp.corr, level);
    }
    psychoJS.experiment.addData('end_block_key_resp.keys', end_block_key_resp.keys);
    if (typeof end_block_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_block_key_resp.rt', end_block_key_resp.rt);
        routineTimer.reset();
        }
    
    end_block_key_resp.stop();
    // the Routine "endBlock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var effort_rate_blockComponents;
function effort_rate_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'effort_rate_block' ---
    t = 0;
    effort_rate_blockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from effort_rate_code_2
    psychoJS.experiment.addData("effort_rate_num", effort_rate_track);
    if ((cond === "easy")) {
        psychoJS.experiment.addData("effort_rate", "LowEffort");
    } else {
        psychoJS.experiment.addData("effort_rate", "HighEffort");
    }
    
    effort_rate_slider_2.reset()
    eff_rate_image_2.setImage(effCal);
    // keep track of which components have finished
    effort_rate_blockComponents = [];
    effort_rate_blockComponents.push(effort_rate_slider_2);
    effort_rate_blockComponents.push(effort_rate_text_2);
    effort_rate_blockComponents.push(eff_rate_image_2);
    
    for (const thisComponent of effort_rate_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function effort_rate_blockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'effort_rate_block' ---
    // get current time
    t = effort_rate_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *effort_rate_slider_2* updates
    if (t >= 0.0 && effort_rate_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effort_rate_slider_2.tStart = t;  // (not accounting for frame time here)
      effort_rate_slider_2.frameNStart = frameN;  // exact frame index
      
      effort_rate_slider_2.setAutoDraw(true);
    }

    
    // Check effort_rate_slider_2 for response to end routine
    if (effort_rate_slider_2.getRating() !== undefined && effort_rate_slider_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *effort_rate_text_2* updates
    if (t >= 0.0 && effort_rate_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effort_rate_text_2.tStart = t;  // (not accounting for frame time here)
      effort_rate_text_2.frameNStart = frameN;  // exact frame index
      
      effort_rate_text_2.setAutoDraw(true);
    }

    
    // *eff_rate_image_2* updates
    if (t >= 0.0 && eff_rate_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      eff_rate_image_2.tStart = t;  // (not accounting for frame time here)
      eff_rate_image_2.frameNStart = frameN;  // exact frame index
      
      eff_rate_image_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of effort_rate_blockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function effort_rate_blockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'effort_rate_block' ---
    for (const thisComponent of effort_rate_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from effort_rate_code_2
    block_effort = (block_effort + 1);
    effort_rate_track = (effort_rate_track + 1);
    
    psychoJS.experiment.addData('effort_rate_slider_2.response', effort_rate_slider_2.getRating());
    psychoJS.experiment.addData('effort_rate_slider_2.rt', effort_rate_slider_2.getRT());
    // the Routine "effort_rate_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prob_rate_blockComponents;
function prob_rate_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prob_rate_block' ---
    t = 0;
    prob_rate_blockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    prob_rate_slider_2.reset()
    prob_rate_image_2.setImage(effCal);
    // Run 'Begin Routine' code from prob_rate_code_2
    psychoJS.experiment.addData("prob_rate_num", prob_rate_track);
    if ((cond === "easy")) {
        psychoJS.experiment.addData("prob_rate", "LowEffort");
    } else {
        psychoJS.experiment.addData("prob_rate", "HighEffort");
    }
    
    // keep track of which components have finished
    prob_rate_blockComponents = [];
    prob_rate_blockComponents.push(prob_rate_slider_2);
    prob_rate_blockComponents.push(prob_rate_image_2);
    prob_rate_blockComponents.push(prob_rate_text_2);
    
    for (const thisComponent of prob_rate_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prob_rate_blockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prob_rate_block' ---
    // get current time
    t = prob_rate_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prob_rate_slider_2* updates
    if (t >= 0.0 && prob_rate_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prob_rate_slider_2.tStart = t;  // (not accounting for frame time here)
      prob_rate_slider_2.frameNStart = frameN;  // exact frame index
      
      prob_rate_slider_2.setAutoDraw(true);
    }

    
    // Check prob_rate_slider_2 for response to end routine
    if (prob_rate_slider_2.getRating() !== undefined && prob_rate_slider_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *prob_rate_image_2* updates
    if (t >= 0.0 && prob_rate_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prob_rate_image_2.tStart = t;  // (not accounting for frame time here)
      prob_rate_image_2.frameNStart = frameN;  // exact frame index
      
      prob_rate_image_2.setAutoDraw(true);
    }

    
    // *prob_rate_text_2* updates
    if (t >= 0.0 && prob_rate_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prob_rate_text_2.tStart = t;  // (not accounting for frame time here)
      prob_rate_text_2.frameNStart = frameN;  // exact frame index
      
      prob_rate_text_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prob_rate_blockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prob_rate_blockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prob_rate_block' ---
    for (const thisComponent of prob_rate_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('prob_rate_slider_2.response', prob_rate_slider_2.getRating());
    psychoJS.experiment.addData('prob_rate_slider_2.rt', prob_rate_slider_2.getRT());
    // Run 'End Routine' code from prob_rate_code_2
    block_prob = (block_prob + 1);
    prob_rate_track = (prob_rate_track + 1);
    
    // the Routine "prob_rate_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var like_rate_blockComponents;
function like_rate_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'like_rate_block' ---
    t = 0;
    like_rate_blockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from like_rate_code_3
    psychoJS.experiment.addData("like_rate_num", like_rate_track);
    if ((cond === "easy")) {
        psychoJS.experiment.addData("like_rate", "LowEffort");
    } else {
        psychoJS.experiment.addData("like_rate", "HighEffort");
    }
    
    like_rate_slider_3.reset()
    like_rate_image_3.setImage(effCal);
    // keep track of which components have finished
    like_rate_blockComponents = [];
    like_rate_blockComponents.push(like_rate_text_3);
    like_rate_blockComponents.push(like_rate_slider_3);
    like_rate_blockComponents.push(like_rate_image_3);
    
    for (const thisComponent of like_rate_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function like_rate_blockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'like_rate_block' ---
    // get current time
    t = like_rate_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *like_rate_text_3* updates
    if (t >= 0.0 && like_rate_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_text_3.tStart = t;  // (not accounting for frame time here)
      like_rate_text_3.frameNStart = frameN;  // exact frame index
      
      like_rate_text_3.setAutoDraw(true);
    }

    
    // *like_rate_slider_3* updates
    if (t >= 0.0 && like_rate_slider_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_slider_3.tStart = t;  // (not accounting for frame time here)
      like_rate_slider_3.frameNStart = frameN;  // exact frame index
      
      like_rate_slider_3.setAutoDraw(true);
    }

    
    // Check like_rate_slider_3 for response to end routine
    if (like_rate_slider_3.getRating() !== undefined && like_rate_slider_3.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *like_rate_image_3* updates
    if (t >= 0.0 && like_rate_image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_image_3.tStart = t;  // (not accounting for frame time here)
      like_rate_image_3.frameNStart = frameN;  // exact frame index
      
      like_rate_image_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of like_rate_blockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function like_rate_blockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'like_rate_block' ---
    for (const thisComponent of like_rate_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from like_rate_code_3
    block_like = (block_like + 1);
    like_rate_track = (like_rate_track + 1);
    
    psychoJS.experiment.addData('like_rate_slider_3.response', like_rate_slider_3.getRating());
    psychoJS.experiment.addData('like_rate_slider_3.rt', like_rate_slider_3.getRT());
    // the Routine "like_rate_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var like_rate_rewStim_blockComponents;
function like_rate_rewStim_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'like_rate_rewStim_block' ---
    t = 0;
    like_rate_rewStim_blockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from like_rate_rewStim_code
    psychoJS.experiment.addData("like_rate_rewStim_num", like_rate_track_rewStim);
    psychoJS.experiment.addData("like_rate_rewStim_file", rewStim);
    psychoJS.experiment.addData("like_rate_rewStim", rewStimLabel);
    
    like_rate_rewStim_slider_2.reset()
    like_rate_rewStim_image_2.setImage(rewStim);
    // keep track of which components have finished
    like_rate_rewStim_blockComponents = [];
    like_rate_rewStim_blockComponents.push(like_rate_rewStim_text_2);
    like_rate_rewStim_blockComponents.push(like_rate_rewStim_slider_2);
    like_rate_rewStim_blockComponents.push(like_rate_rewStim_image_2);
    
    for (const thisComponent of like_rate_rewStim_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function like_rate_rewStim_blockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'like_rate_rewStim_block' ---
    // get current time
    t = like_rate_rewStim_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *like_rate_rewStim_text_2* updates
    if (t >= 0.0 && like_rate_rewStim_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_rewStim_text_2.tStart = t;  // (not accounting for frame time here)
      like_rate_rewStim_text_2.frameNStart = frameN;  // exact frame index
      
      like_rate_rewStim_text_2.setAutoDraw(true);
    }

    
    // *like_rate_rewStim_slider_2* updates
    if (t >= 0.0 && like_rate_rewStim_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_rewStim_slider_2.tStart = t;  // (not accounting for frame time here)
      like_rate_rewStim_slider_2.frameNStart = frameN;  // exact frame index
      
      like_rate_rewStim_slider_2.setAutoDraw(true);
    }

    
    // Check like_rate_rewStim_slider_2 for response to end routine
    if (like_rate_rewStim_slider_2.getRating() !== undefined && like_rate_rewStim_slider_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *like_rate_rewStim_image_2* updates
    if (t >= 0.0 && like_rate_rewStim_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      like_rate_rewStim_image_2.tStart = t;  // (not accounting for frame time here)
      like_rate_rewStim_image_2.frameNStart = frameN;  // exact frame index
      
      like_rate_rewStim_image_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of like_rate_rewStim_blockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function like_rate_rewStim_blockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'like_rate_rewStim_block' ---
    for (const thisComponent of like_rate_rewStim_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from like_rate_rewStim_code
    block_like_rewStim = (block_like_rewStim + 1);
    like_rate_track_rewStim = (like_rate_track_rewStim + 1);
    stim_block_loop = (stim_block_loop + 1);
    if ((cond === "easy")) {
        if ((stim_block_loop > 0)) {
            rewStim = rewStim_array[1];
            rewStimLabel = rewStimLabel_array[1];
        }
    } else {
        if ((stim_block_loop > 0)) {
            rewStim = rewStim_array[3];
            rewStimLabel = rewStimLabel_array[3];
        }
    }
    
    psychoJS.experiment.addData('like_rate_rewStim_slider_2.response', like_rate_rewStim_slider_2.getRating());
    psychoJS.experiment.addData('like_rate_rewStim_slider_2.rt', like_rate_rewStim_slider_2.getRT());
    // the Routine "like_rate_rewStim_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exit_key_resp_allKeys;
var exit_exp_routineComponents;
function exit_exp_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exit_exp_routine' ---
    t = 0;
    exit_exp_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exit_key_resp.keys = undefined;
    exit_key_resp.rt = undefined;
    _exit_key_resp_allKeys = [];
    // keep track of which components have finished
    exit_exp_routineComponents = [];
    exit_exp_routineComponents.push(exit_text);
    exit_exp_routineComponents.push(exit_key_resp);
    
    for (const thisComponent of exit_exp_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exit_exp_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exit_exp_routine' ---
    // get current time
    t = exit_exp_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exit_text* updates
    if (t >= 0.0 && exit_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exit_text.tStart = t;  // (not accounting for frame time here)
      exit_text.frameNStart = frameN;  // exact frame index
      
      exit_text.setAutoDraw(true);
    }

    
    // *exit_key_resp* updates
    if (t >= 0.0 && exit_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exit_key_resp.tStart = t;  // (not accounting for frame time here)
      exit_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exit_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exit_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exit_key_resp.clearEvents(); });
    }

    if (exit_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = exit_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _exit_key_resp_allKeys = _exit_key_resp_allKeys.concat(theseKeys);
      if (_exit_key_resp_allKeys.length > 0) {
        exit_key_resp.keys = _exit_key_resp_allKeys[_exit_key_resp_allKeys.length - 1].name;  // just the last key pressed
        exit_key_resp.rt = _exit_key_resp_allKeys[_exit_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exit_exp_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exit_exp_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exit_exp_routine' ---
    for (const thisComponent of exit_exp_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(exit_key_resp.corr, level);
    }
    psychoJS.experiment.addData('exit_key_resp.keys', exit_key_resp.keys);
    if (typeof exit_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exit_key_resp.rt', exit_key_resp.rt);
        routineTimer.reset();
        }
    
    exit_key_resp.stop();
    // the Routine "exit_exp_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
