let messages = {
    startOfMessage: ['Remember', 'Listen', 'Some say'],
    phrases: ["When you have a dream, you've got to grab it and never let go.", "Nothing is impossible. The word itself says 'I'm possible!", "There is nothing impossible to they who will try.", "The bad news is time flies. The good news is you're the pilot.", "Keep your face always toward the sunshine, and shadows will fall behind you.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "You define your own life. Don't let other people write your script.", "You are never too old to set another goal or to dream a new dream.", "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.", "Not having the best situation, but seeing the best in your situation is the key to happiness."],
    endOfMessage: ["Good luck!", "Have an awesome day!", "Think about."]
}

let generateMessageFunction = obj => {
    for (let prop in obj) {
        console.log(obj[prop][Math.floor(Math.random() * obj[prop].length)]);
    }
}

generateMessageFunction(messages)