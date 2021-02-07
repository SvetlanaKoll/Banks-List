const Bank = require('./bankModel')


//ROUTE HANDLERS
exports.getAllBanks = async (req, res) => {
  try{
    const banks = await Bank.find()
    console.log(banks)
    res.status(200).json({
      status: 'success',
      results: banks.length,
      data: {
        banks
      },
    });

  }catch (err) {
    res.send(404).json({
      status:'fail',
      message: err
    })
  }
};

exports.getBank = async (req, res) => {
  try{
    const bank = await Bank.findById(req.params.id)

    res.status(200).json({
      status:'success',
      data: {
        bank: bank
      }
    })
  } catch (err){
    res.status(404).json({
      status:'fail',
      message: err
    })
  }
};
exports.getBankByName = async (req, res) => {
  try{
    const bank = await Bank.find({})

    res.status(200).json({
      status:'success',
      data: {
        bank: bank
      }
    })
  } catch (err){
    res.status(404).json({
      status:'fail',
      message: err
    })
  }
};
exports.createBank = async (req, res) => {
  try {
    const newBank = await Bank.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        bank: newBank
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
exports.updateBank = async (req, res) => {
  try{
    const bank = await Bank.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        bank
      },
    });

  } catch (err){
    res.status(404).json({
      status:'fail',
      message: notUpdated
    })
  }
};
exports.deleteBank = async (req, res) => {
  try{
     await Bank.findByIdAndDelete(req.params.id)
    res.send(204).json({
      status:'success',
      data: null
    })
  } catch (err){
    res.send(404).json({
      status:'fail',
      message: err
    })
  }
};