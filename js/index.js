function redirect(page, correctanswer) {
    while (true) {
        var choice = Number(prompt("Faça a sua escolha"))
        if (choice === 1 || choice === 2) {
            if (choice === correctanswer) {
                location.replace(page)
            }
            else {
                alert("Game Over")
                location.replace ("../index.html")

            }
            break 
        }
    }

}