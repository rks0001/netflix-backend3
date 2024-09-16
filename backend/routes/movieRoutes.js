import { Router } from "express";
import Movie from "../models/Movie.js";

const router = Router();

// CREATE MOVIES:

router.post("/",async(req,res)=>{
    if(req.user.isAdmin){
      const newMovie = new Movie(req.body);

      try{
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
      }catch(err){
        res.status(500).json(err);
      }
    }else{
        res.status(403).json("You are not allowed!!");
    }
})

// GET MOVIES WITH AN ID

router.get("/find/:id",async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    }catch(err){
        res.status(500).json(err);
    }
});

// GET ALL MOVIES OR SERIES

router.get("/find", async (req, res) => {
    const type = req.query.type; 
    let movies;
    try {
        if (type === "series") {
            movies = await Movie.find({ type: "series" }); 
        } else if (type === "movies") {
            movies = await Movie.find({ type: "movie" }); 
        } else {
            movies = await Movie.find(); 
        }
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json(err);
    }
});




export default router;