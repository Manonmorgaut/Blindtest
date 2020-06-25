export function pageLoader(filename) {
    axios.get(`./${filename}.html`)
    .then (html => {
        console.log(html)
    })
    .catch(err => {
        console.log(err)
    })
}