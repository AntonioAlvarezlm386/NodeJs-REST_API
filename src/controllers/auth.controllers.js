export const signin = async (req, res) => {
    res.send('inicio de sesion')
}

export const signup = async (req, res )=> {
    console.log(req.body)

    res.send('registro')
}