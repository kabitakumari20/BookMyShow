const { createTicket,
    getTicketById,
    deleteTicketById,
    updateTicketById}=require("../business/ticket.business");

    exports.createTicket=async req=> await createTicket(req.body)