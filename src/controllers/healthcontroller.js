const HealthController = {
    testroute: async (req, res) => {
        try{
            res.status(200).json({message:"LOAD EXCELENT"});
        }catch(error){
            console.error("Error logging in:", error);
            res.status(500).json({message:"Server Error"});
        }
    }
    
}

module.exports = HealthController;