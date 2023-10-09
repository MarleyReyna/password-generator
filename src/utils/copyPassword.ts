export const copyPassword = (e: React.FormEvent) =>{
    e.preventDefault()
    const textCopy = $('#password').val() as string;
    navigator.clipboard.writeText(textCopy);

    $('.CopyModal').addClass('appear')
    $('.App').addClass('copy')

    setTimeout(() =>{
        $('.CopyModal').removeClass('appear')
        $('.App').removeClass('copy')
    }, 1700)
}