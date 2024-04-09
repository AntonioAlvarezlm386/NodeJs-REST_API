/** Para endpoints erroneos o no existentes */
export const endpointNotFound = (req, res, next) => {
    res.status(404).json({
        mesage: "Endpoint not Found"
    })
}