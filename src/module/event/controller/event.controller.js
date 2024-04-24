const {createEvent,getAllEvents,getEventById,updateEventById,deleteEventById}=require("../business/event.business");


exports.createEvent = async req => await createEvent(req.body)
exports.getAllEvents = async req => await getAllEvents(req.body)
exports.getEventById = async req => await getEventById(req.params.id)
exports.updateEventById = async req => await updateEventById(req.body)
exports.deleteEventById = async req => await deleteEventById(req.body)

