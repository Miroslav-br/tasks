function pigLatin(string){
    if(!string.match(/\d/)){
        return null
    }
    if(!string.search(/[aeuoi]/)){
        return string + 'way'
    }
    const count = string.search(/[aeuoi]/) == -1? 0: string.search(/[aeuoi]/); 
    return string.slice(count)+string.slice(0,count)+'ay'
}

console.log(pigLatin('s2t'));