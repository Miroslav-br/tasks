class Dictionary {
    #name
    #words
    constructor(name) {
        this.#name = name
        this.#words = {}
    }

    get mainName() {return this.#name}
    set setMainName(value) {this.#name = value}

    get allWords(){
        return this.#words
    }

    addNewWords(newWord, wordObj){
        this.#words[newWord] = wordObj
    }

    add(word, description){

        if(!(Object.keys(this.#words).includes(word))) {
            wordObj = {word,description}
            this.addNewWords(word,wordObj)
        }
    }
    remove(word) {
        if(Object.keys(this.#words).includes(word)){
            delete this.#words[word]
        }
    }
    getWord(word) {
        if(Object.keys(this.#words).includes(word)) { 
            return this.#words[word]
        }
        return console.log(`Слова ${word} нет в словаре`)
    }

    showAllWord(){
        return this.words
    }
}


// Создание дочернего класса


class HardWordsDictionary extends Dictionary{
        constructor(name){
        super(name)
    }
    add(word, description,difficult = false){
        if(!(Object.keys(this.allWords).includes(word))) {
            this.addNewWords(word, {word,description,difficult})
        }
    }
}


const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWord();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант

debugger