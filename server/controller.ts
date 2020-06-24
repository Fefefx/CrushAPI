
import model from './model';

class Controller{

    constructor(){ }

    getCrushs(){
        return model.find({});
    }

    getCrushById(id){
        return model.find(id);
    }

    deleteById(id){
        return model.deleteOne(id);
    }

    updateCrush(id, data){
        return model.findOneAndUpdate(id, data);
    }

    createCrush(data){
        return model.create(data);
    }

    select(req,res){
        this.getCrushs()
        .then(crushs=> res.status(200).json({'result': crushs}))
        .catch(err=> res.status(400).json({'result':err}));
    }

    selectOne(req,res){
        const id = {_id: req.params.id};
        this.getCrushById(id)
        .then(crushs=> res.status(200).json({'result': crushs}))
        .catch(err=> res.status(400).json({'result':err}));
    }

    delete(req,res){
        const id = {_id: req.params.id};
        this.deleteById(id)
        .then(crushs=> res.status(200).json({'result': crushs}))
        .catch(err=> res.status(400).json({'result':err}));
    }

    update(req,res){
        const id = {_id: req.params.id};
        const crush = req.body;
        this.updateCrush(id, crush)
        .then(crushs=> res.status(200).json({'result': crushs}))
        .catch(err=> res.status(400).json({'result':err}));
    }

    create(req,res){
        const crush = req.body;
        this.createCrush(crush)
        .then(crushs=> res.status(200).json({'result': crushs}))
        .catch(err=> res.status(400).json({'result':err}));
    }

}

export default Controller;