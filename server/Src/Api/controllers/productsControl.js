import Products from '../models/productsModel.js';

//Create Product
export const createProduct = async (req, res) => {
  const ProfileData = req.body;
  const newProfile = new Products(ProfileData);
  try {
    await newProfile.save().then((profileData) => {
      res.status(201).json({
        message: 'Products Created Successfully',
        data: profileData,
      });
    });
  } catch (err) {
    res.status(401).json({
      message: 'create Products failed',
      error: err,
    });
  }
};

//=======================Get all the Products==========================

export const GetAllProducts = async (req, res) => {
  const BodyReq = req.body.name;
  try {
    //search if the user didn't send any filter
    if (BodyReq === undefined) {
      //return all the Users
      await Products.find({}).then((product) => {
        res.status(201).json({
          message: 'Get all Products work successfully',
          data: product,
          pageSize: 6,
          total: product.length,
        });
      });
    } else {
      //return users by the filter that sent from front-end
      console.log(BodyReq);
    }
  } catch (err) {
    res.status(401).json({
      message: "Get Products didn't work, something went wrong",
      err: err,
    });
  }
};

//============================Delete one Product==================================
export const DeleteProductById = async (req, res) => {
  const id = req.body.id;
  try {
    await Products.deleteOne({ _id: id }).then((e) => {
      res.status(201).json({
        message: 'deleted this Product successfully',
        data: e,
      });
    });
  } catch (err) {
    res.status(404).json({
      message: "This id isn't found there sorry!",
      ErrorData: err,
    });
  }
};
//============================Get one Product each request==================================
export const GitSingleProduct = (req, res) => {
  const id = req.body.id;
  console.log(req.body);
  Products.find({ _id: id }).then((data) => {
    res.status(201).json({
      Message: `Get this ${id} Product successfully`,
      data: data[0],
    });
  });
};
