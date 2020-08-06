import markdownIt from 'markdown-it'

const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
})

export default function markdown(stringToParse) {
    return md.render(stringToParse)
}
