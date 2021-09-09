class Quiz{
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var playerCountRef = await database.ref('contestantCount').once("value");
          if(playerCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
      }
      play(){
        question.hide();
        background("Green");
        fill(0);
        textSize(30)
        text("Result of the Quiz", 340,50);
        text("-----------------------, 320,75");
        Contestant.getPlayerInfo();
        if(allContestants !== undefined){
          var display_Answers = 230;
          fill("Red")
          textSize(20);
    
          for(var plr in allContestants){
            var correctAns = "Option 2"
            if (correctAns=== allContestants[plr].answer)
            fill(green)
            else
            fill("red")
            display_Answers+=30
            textSize(20)
            text(allContestants[plr].name+ ":" + allContestants[plr].answer,250, display_Answers)

            }
          }
        }
      }
           
          
    
        
    