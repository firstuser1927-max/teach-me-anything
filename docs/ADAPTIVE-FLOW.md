# Adaptive Flow Diagram

```mermaid
flowchart TD
    START([Session Start]) --> READ_PROFILE[Read LEARNER-PROFILE.md]
    READ_PROFILE --> READ_SIGNALS[Read recent learning records<br/>+ NOTES.md for signals]
    
    READ_SIGNALS --> CALIBRATE[Calibrate Profile<br/>Update any dimensions<br/>with new evidence]
    
    CALIBRATE --> GET_ZPD[Get ZPD Skill<br/>from standard calculation]
    
    GET_ZPD --> ADAPT_DIFFICULTY{Adaptive Difficulty<br/>Engine}
    
    %% Difficulty Engine
    ADAPT_DIFFICULTY --> CHECK_ERROR{Error pattern<br/>detected?}
    
    CHECK_ERROR -->|Conceptual gap| PREREQUISITE[Insert prerequisite<br/>mini-lesson]
    CHECK_ERROR -->|Transfer failure| TRANSFER_PRACTICE[Add transfer practice<br/>to current lesson]
    CHECK_ERROR -->|Overgeneralization| BOUNDARY[Add boundary condition<br/>examples]
    CHECK_ERROR -->|Careless| NO_CHANGE_1[No difficulty change<br/>add "slow down" prompt]
    CHECK_ERROR -->|None| CHECK_PACE
    
    PREREQUISITE --> CHECK_PACE
    TRANSFER_PRACTICE --> CHECK_PACE
    BOUNDARY --> CHECK_PACE
    NO_CHANGE_1 --> CHECK_PACE
    
    CHECK_PACE{Pace adaptation<br/>needed?}
    
    CHECK_PACE -->|Fast learner| ACCELERATE[Remove scaffolding<br/>Combine skills<br/>Increase challenge]
    CHECK_PACE -->|Slow learner| DECELERATE[Split into smaller chunks<br/>Add more examples<br/>Reduce scope]
    CHECK_PACE -->|Medium| CHECK_REP
    
    ACCELERATE --> CHECK_REP
    DECELERATE --> CHECK_REP
    
    CHECK_REP{Representation<br/>switch needed?}
    
    CHECK_REP -->|Last lesson used X<br/>and user struggled| SWITCH_REP[Switch representation<br/>e.g., concept→example<br/>text→visual]
    CHECK_REP -->|User responded well| KEEP_REP[Keep same representation]
    CHECK_REP -->|No data yet| DEFAULT_REP[Use default for topic]
    
    SWITCH_REP --> SELECT_SCAFFOLD
    KEEP_REP --> SELECT_SCAFFOLD
    DEFAULT_REP --> SELECT_SCAFFOLD
    
    %% Scaffolding Selection
    SELECT_SCAFFOLD{Select Scaffolding<br/>Level}
    
    SELECT_SCAFFOLD -->|High need| LEVEL_3[Level 3: Full Scaffolding]
    SELECT_SCAFFOLD -->|Medium need| LEVEL_2[Level 2: Guided Scaffolding]
    SELECT_SCAFFOLD -->|Low need| LEVEL_1[Level 1: Minimal Scaffolding]
    
    LEVEL_3 --> BUILD_LESSON
    LEVEL_2 --> BUILD_LESSON
    LEVEL_1 --> BUILD_LESSON
    
    BUILD_LESSON[Build Adapted Lesson] --> DELIVER[Deliver to User]
    
    %% Real-time Adaptation During Lesson
    DELIVER --> USER_ENGAGES[User engages with lesson]
    
    USER_ENGAGES --> SIGNAL_DETECT{Detect signals<br/>during lesson}
    
    SIGNAL_DETECT -->|Confusion signal| IN_LESSON_ADAPT{Type of confusion?}
    SIGNAL_DETECT -->|Boredom signal| IN_LESSON_ACCEL[Offer harder variant<br/>or skip to practice]
    SIGNAL_DETECT -->|Frustration signal| IN_LESSON_SLOW[Pause, validate,<br/>offer different angle]
    SIGNAL_DETECT -->|None| CONTINUE[Continue lesson]
    
    IN_LESSON_ADAPT -->|Can't parse explanation| REFRAME[Reframe: different<br/>representation]
    IN_LESSON_ADAPT -->|Missing prerequisite| INSERT_MINI[Insert quick<br/>prerequisite check]
    IN_LESSON_ADAPT -->|Overwhelmed| REDUCE_SCOPE[Reduce to core only,<br/>cut extras]
    
    REFRAME --> CONTINUE
    INSERT_MINI --> CONTINUE
    REDUCE_SCOPE --> CONTINUE
    IN_LESSON_ACCEL --> CONTINUE
    IN_LESSON_SLOW --> CONTINUE
    
    CONTINUE --> CHECK_COMPLETE{Lesson complete?}
    CHECK_COMPLETE -->|No| USER_ENGAGES
    CHECK_COMPLETE -->|Yes| POST_LESSON_ADAPT
    
    %% Post-lesson Adaptation
    POST_LESSON_ADAPT{Post-lesson<br/>assessment}
    
    POST_LESSON_ADAPT -->|Passed easily| ELEVATE[Elevate difficulty<br/>for next lesson]
    POST_LESSON_ADAPT -->|Passed with struggle| MAINTAIN[Maintain level<br/>maybe add support]
    POST_LESSON_ADAPT -->|Failed| REGRESS[Regress difficulty<br/>add scaffolding]
    
    ELEVATE --> UPDATE_PROFILE[Update LEARNER-PROFILE.md<br/>with session evidence]
    MAINTAIN --> UPDATE_PROFILE
    REGRESS --> UPDATE_PROFILE
    
    UPDATE_PROFILE --> CHECK_CAPACITY{Session capacity<br/>reached?}
    
    CHECK_CAPACITY -->|Yes| CLOSE[Close session<br/>with summary]
    CHECK_CAPACITY -->|No| CHECK_FATIGUE{Fatigue signals?}
    
    CHECK_FATIGUE -->|Yes| CLOSE
    CHECK_FATIGUE -->|No| GET_ZPD
    
    CLOSE --> END([Session End])
```
