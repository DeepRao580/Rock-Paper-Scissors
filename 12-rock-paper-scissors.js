// const score ={
        //     Wins: 0,
        //     Losses: 0,
        //     Ties: 0
        // }
        const score= 
            JSON.parse(localStorage.getItem('score')) || {
             Wins: 0,
             Losses: 0,
             Ties: 0
        };



        let ComputerMove='';
        let Result='';
        let playermove;
        // document.querySelector('.js-score').innerHTML=(` Wins= ${score.Wins}, Losses= ${score.Losses}, Ties= ${score.Ties}`);

        function updateScore(playermove){
            document.querySelector('.js-result').innerHTML= (`${Result}`); 
            document.querySelector('.js-moves').innerHTML=(` You <img src="${playermove}-emoji.png" alt="" class="move-icon">
        <img src="${ComputerMove}-emoji.png" alt="" class="move-icon">
        Computer`); 
            document.querySelector('.js-score').innerHTML=(` Wins= ${score.Wins} , Losses= ${score.Losses} , Ties= ${score.Ties}`);
        }
        function pickComputerMove(){
        const Randomnumber= Math.random();


        // let ComputerMove = '';

        // Function creates a scope which means that variable declared inside a function is not applicable outside the function

        // document.querySelector('.js-score').innerHTML= (`
        // Wins= ${score.Wins}, Losses= ${score.Losses}, Ties= ${score.Ties}`) ;

        if(Randomnumber>=0 && Randomnumber<(1/3)){
             ComputerMove= 'Rock';
        }
        else if(Randomnumber>=(1/3) && Randomnumber<(2/3))
        {
             ComputerMove= 'Paper';
        }
        else if(Randomnumber>=(2/3) && Randomnumber<(1))
        {
             ComputerMove= 'Scissors';
        }
        
        console.log(ComputerMove);
        return ComputerMove;
        }


        function playgame(playermove){
            ComputerMove = pickComputerMove();
            if (playermove=== 'Scissors'){
            if(ComputerMove=== 'Paper'){
            Result='You Win';
            }
            else if(ComputerMove=== 'Rock'){
            Result= 'You Lose';
            }
            else if(ComputerMove=== 'Scissors'){
            Result= 'Tie'
            }
            }
        


            else if (playermove=== 'Rock'){
            if(ComputerMove === 'Rock' ){
            Result='Tie';
            }
            else if(ComputerMove === 'Paper'){
            Result='You Lose';
            }
            else if(ComputerMove === 'Scissors')
            {
            Result='You Win';
            }
            }


            else if(playermove=== 'Paper'){
            if(ComputerMove=== 'Paper'){
            Result= 'Tie';
            }
            else if(ComputerMove=== 'Rock'){
            Result= 'You Win';
            }
            else if(ComputerMove=== 'Scissors'){
            Result= 'You Lose'
            }
            }

            if(Result=== 'You Win'){
                score.Wins = score.Wins +1;
            }
            else if(Result=== 'Tie'){
                score.Ties+= 1;
            }
            else if(Result=== 'You Lose'){
                score.Losses+=1;
            }

            localStorage.setItem('score', JSON.stringify(score));


            updateScore(playermove);
        }

        let intervalID;

        function autoPlay(){
            intervalID= setInterval(()=>{
                const playerMove= pickComputerMove();
                playgame(playerMove);
            }, 2000);
        }

        function stopAutoplay(){
            clearInterval(intervalID);
        }