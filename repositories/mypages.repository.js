const { mypages } = require('../models');
const { Goods } = require('../models');
const { Users } = require('../models');

class MypagesRepository {
  findAllMypage = async (userId) => {
    const mypage = await mypages.findOne({where: {userId}});

    return mypage;
  }

  getRandoms = async (userId) => {
    const random = await mypages.findOne({where: {userId}})

    return random;
  }

  editPersonalData = async (nickname, password, email, address, userId) => {
    const editedPersonalData = await Users.update(
        {nickname, password, email, address}, {where: { userId }}
    );
    return editedPersonalData;
  }
  
   MypagesById = async (userId,goodsId) => {
    const mypage = await mypages.findByPk(userId,goodsId);

    return mypage;
  }

  createMypages = async (userId,postsId,comment,nickname, r) => {

    const createCommentsData = await mypages.create({ userId,postsId,comment,nickname,r });

    return createCommentsData;
  }

  // deductionPoints = async (userId,point) => {
  //   const deductionPointsData = await mypages.({point}, {where: {userId}});
  // }
 

  deleteMypages = async (goodsId) => {
    const deleteCommentsData = await mypages.destroy({ where: {userId,goodsId}});

    return deleteCommentsData;
  }

  findGoods = async (goodsId) => {
    const findgood = await Goods.findOne({where: {goodsId}})
  }
  
}

module.exports = MypagesRepository;
