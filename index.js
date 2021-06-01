class Formatter {
  //add static methods here
  static capitalize(string) {
   let line = string.charAt(0).toUpperCase()
   return line + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[!@#$%^&*{};:\|<>()]/g, '')
  }
  static titleize(string) {
    let exceptions = [ "the", "a", "an", "but", "of", "and", "for","at", "by", "from" ]
    let newArray = string.split(" ")
    let title = []
    for (let i = 0; i < newArray.length; i++) {
      if (i == 0) {
        title.push(this.capitalize(newArray[i]))
      } else {
        if (exceptions.includes (newArray[i])){
          title.push(newArray[i]) 
        } else {
          title.push(this.capitalize(newArray[i]))
        }
      }
      }
      return title.join(" ")
    }
}