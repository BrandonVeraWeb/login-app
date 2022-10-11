export default function customForm(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    return formData
}
