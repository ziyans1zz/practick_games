function start(arena) {
    let i = 0;
    
    for (let hod of arena) {
     hod.addEventListener('click', function step() {
      this.textContent = ['X', 'O'][i % 2];
      this.removeEventListener('click', step);
      
      if (isVictory(arena)) {
        alert(this.textContent + ' - Viktory');
    }
        else if (i == 8) {
        alert('Draw');
    }

    function isVictory(arena) {
        let options = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    
        for (let pobeda of options) {
            if ( arena[pobeda[0]].textContent == arena[pobeda[1]].textContent && arena[pobeda[1]].textContent == arena[pobeda[2]].textContent && arena[pobeda[0]].textContent != '' ) {
                return true;
            }
        }
        
        return false;
    }

      i++;
     });
    }
   }
  
let arena = document.querySelectorAll('#pole td');
start(arena);