import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  const [usersId] = req.body;

  try {
    const usersInGroup = await User.find({ _id: { $in: [...usersId] } });

    res.status(200).json({ usersInGroup });
  } catch (error) {
    console.log("Ошибка в getUser Контроллере");
    return res
      .status(500)
      .json({ message: "Не удалось найти пользователя", error: error.message });
  }
};
