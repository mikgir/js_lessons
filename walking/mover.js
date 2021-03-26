let  mover = {

    getDirection() {
        const aviableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let derection = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместится, "Отмена" для выхода.'))
            if (isNaN(derection)) {
                return null;
            }
            if (!aviableDirections.includes(derection)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9');
                continue;
            }
            return derection;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        }
        return nextPosition;
    }
};