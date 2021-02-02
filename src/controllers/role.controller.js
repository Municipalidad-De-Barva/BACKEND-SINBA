import daoRole from "../database/DaoRole";
const role = new daoRole();

export const list = async (req, res) => {
  role.listar_Role(function (result) {
    if (result) {
      return res.status(200).json({data: result});
    } else {
      return res.status(400).json({message: "no data"});
    }
  });
};
