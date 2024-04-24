const {Ticket}=require("../model/ticket.model");


const createTicket = async (req, res) => {
    try {
      const newTicket = new Ticket(req.body);
      const savedTicket = await newTicket.save();
      res.status(201).json(savedTicket);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  };
  
  // Get all tickets
  const getAllTickets = async (req, res) => {
    try {
      const tickets = await Ticket.find();
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Get a single ticket by ID
  const getTicketById = async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.id);
      if (!ticket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      res.json(ticket);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Update a ticket by ID
  const updateTicketById = async (req, res) => {
    try {
      const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTicket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      res.json(updatedTicket);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Delete a ticket by ID
  const deleteTicketById = async (req, res) => {
    try {
      const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
      if (!deletedTicket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  module.exports = {
    createTicket,
    getTicketById,
    deleteTicketById,
    updateTicketById
  };
  