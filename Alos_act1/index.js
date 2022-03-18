var unirest = require('unirest')
// Exercice A Q-2
function name_starts_with(memes, letter) {
    return memes.filter(memes => memes.name[0] == letter)
}

var req = unirest('GET', 'http://localhost:3000/memes').headers({
    "cache-control": "no-cache" // Exercice A Q-3: "response" peut ètre stocké dans le cache si validé par le serveur d'origine, mème si "response" est non-cacheable 
}).then((res) => {
    if (res.error) throw new Error(res.error)

    // Exercice A Q-1
    var first_10_memes = res.body.slice(0, 10)
    console.log("FIRST 10 MEMES:\n")
    console.log(first_10_memes)

    //calling function "name_starts_with" for  Q-2
    console.log("\n\n\n\n")
    console.log("MEMES THAT START WITH THE LETTER M:\n")
    console.log(name_starts_with(res.body, "M"))
})