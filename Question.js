class Question{
    constructor(){
       
        this.title = createElement('h1')
        this.input1 = createInput("Enter your name here....")
        this.input2 = createInput("Enter correct option no....")
        this.button = createButton('Submit')
        this.question = createElement('h3')
        this.option1 = createElement('h4')
        this.option2 = createElement('h4')
        this.option3 = createElement('h4')
        this.option4 = createElement('h4')
    }

    hide(){
        this.title.hide();
        this.button.hide();
        this.input1.hide();
        this.input2.hide();
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.question.html("Question - How many times can you subtract 3 from 33? ");
        this.question.position(150,80);
        this.option1.html("1: 11 times");
        this.option1.position(150, 100);
        this.option2.html("1: only 1 time");
        this.option2.position(150, 120);
        this.option3.html("1: 10 times");
        this.option3.position(150, 140);
        this.option4.html("1: unlimited times");
        this.option4.position(150, 160);

        this.input1.position(150, 230);
        this.input2.position(350, 230);
        this.button.position(290, 300);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();
            this.input1.hide();
            this.input2.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
          })
    }
}