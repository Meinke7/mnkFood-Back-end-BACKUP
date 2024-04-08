const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorageForPlate");

class PlatesImageController {
    async update(request, response){
        const plate_id = request.params;
        const imgPlateFilename = request.file.filename;
        const diskStorage = new DiskStorage();
        
        const plate = await knex("plates")
        .where(plate_id).first();
        
        if(!plate){
            throw new AppError("Ação negado.", 401);
        } 
        
        if(plate.image){
            await diskStorage.deleteFile(plate.image);
        }
        
        const filename = await diskStorage.saveFile(imgPlateFilename);
        plate.image = filename;
        
        await knex("plates").update({image: plate.image}).where({id: plate_id.id});
        await knex("favorites").update({image: plate.image}).where({id: plate_id.id});
        
        return response.json(plate);
    }
}

module.exports = PlatesImageController;