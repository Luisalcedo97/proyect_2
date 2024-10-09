import Activity from "../models/Activity.js";


export const  renderCreateActivityForm = (req, res) => {
    res.render("activities/new");
};

export const createActivity = async (req, res) => {
    const {
        title, 
        description,
        type,
        duration,
        location,
        date,
        maxcapacity
    } = req.body;
    const userId = req.userId;
    
    let error = [];

    if (!title || ! description || !type || !duration || !location || !date || maxcapacity ){
        errors.push({ text : "Por favor, completa todos los campos."});
    }

    if( errors. length >0 ) {
        return res.render("actividades/new", {
            errors,
            title,
            description,
            type,
            duration,
            location,
            date,
            maxcapacity,
        });
    }

    try {
        const newActivity = new Activity({
            title,
            description,
            type,
            duration,
            location,
            date,
            maxCapacity,
            userID,
        });

        await newActivity.save();
        req.flash("success_msg", "Actividad creada exitosamente.");
        res.redirect("/actividades");
    } catch (err) {
        console.error(err);
        req.flash("error_msg", "Hubo un error al crear la actividad.");
        res.redirect("/actividades/new");    }
};
export const updateActivity = async (req,res) => {
    const { 
        title,
        description,
        type,
        location,
        date,
        maxCapacity,
    } = req.body;
    try{
        const activity = await Activity.findById(req.params.id);
        if (activity.userID != req.user._id){
            req.flash("error_msg", "No autorizado.");
            return res.redirect("/activities");
        }
        await Activity.findByIdAndUpdate(req.params.id, {
            title,
            description,
            type,
            location,
            date,
            maxCapacity
        });
        req.flash("success_msg", "Actividad actualizada exitosamente.");
        res.redirect("/activities");    
    } catch (err) {
        console.log(err);
        req.flash("error_msg", "Hubo un error al actualizar la actividad.");
        res.redirect("/activities");
    }
    
};

export const deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (activity.userID != req.user._id) {
            req.flash("error_msg", "No autorizado.");
            return res.redirect("/activities");
        }
        await Activity.findByIdAndDelete(req.params.id);
        req.flash("success_msg", "Actividad eliminada exitosamente.");
        res.redirect("/activities");
    } catch (err) {
        console.log(err);
        req.flash("error_msg", "Hubo un error al eliminar la actividad.");
        res.redirect("/activities");
    }

}