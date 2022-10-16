const { addCar, getAllCar , getMyCar } = require('../services/car.service')

const addCarController = async (req, res) => {
    const user = req.user.user_id
    const { name, price, phone, city, images } = req.body
    const payload = { name: name, price: price, phone: phone, city: city, images: images, user: user }
    const car = await addCar(payload)

    if (car) {
        res.status(200).json({ message: 'successfulyy added car' })
    }
    else {
        res.status(500).json({ message: 'something went wrong , please try again' })
    }
}

const allCarController = async (req, res) => {
    const car = await getAllCar()
    if (car) {
        res.status(200).json({ data: car })
    }
    else {
        res.status(500).json({ message: 'something went wrong , please try again' })
    }
}

const myCarController = async (req, res) => {
    const user = req.user.user_id
    const car = await getMyCar(user)
    if (car) {
        res.status(200).json({ data: car })
    }
    else {
        res.status(500).json({ message: 'something went wrong , please try again' })
    }
}


module.exports = { addCarController, allCarController , myCarController}
