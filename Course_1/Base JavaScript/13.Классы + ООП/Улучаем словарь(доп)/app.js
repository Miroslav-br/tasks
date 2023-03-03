class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }

    add(word, description){
        if(Object.keys(this.words).includes(word)){return}
        this.words[word] =  {
            'word': word,
            'description' : description,
        }
    }
    remove(word) {
        if(Object.keys(this.words).includes(word)){
            delete this.words[word]
        }
    }
    getWord(word) {
        if(Object.keys(this.words).includes(word)) { 
            return this.words[word]
        }
        return console.log(`Слова ${word} нет в словаре`)
    }

    showAllWord(){
        return this.words
    }


}

const Dict = new Dictionary('probnik')
Dict.add('js', 'programming language')
Dict.add('JavaScript', 'популярный язык программирования');
Dict.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

Dict.getWord("Python")
const check = Dict.showAllWord()
console.log(check)

Dict.remove('js')
Dict.remove('JavaScript');

console.log(Dict)

// Создание дочернего класса

class HardWordDictionary extends Dictionary{
    constructor(name){
        super(name)
    }
    add(word, description,difficult = false){
        if(Object.keys(this.words).includes(word)){return}
        this.words[word] =  {
            'word': word,
            'description' : description,
            'isDifficult' : difficult
        }
    }
}

const hardWordsDictionary = new HardWordDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.', true);
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

debugger
hardWordsDictionary.remove('неологизм');
console.log(hardWordsDictionary.showAllWord())