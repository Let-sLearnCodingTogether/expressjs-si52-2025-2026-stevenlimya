import mongoose from  "mongoose"

const linkSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            minlength:[150, "Minimal 150 karakter"],
            required : [true, "apa yang ingin anda cari"],
            unique : true,
            trim : true
        },
        icon : {
            type : String,
            required : [true, "icon wajib di isi"],
            unique : true,
            trim : true
        },
        url : {
            type : String,
            required : [true, "tempelkan url anda"],
            unique : true,
            trim : true
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "User",
            required : true
        }
    },
    {
        timestamps : true
    }

)

const LinkModel = mongoose.Model("Link", linkSchema)

export default LinkModel