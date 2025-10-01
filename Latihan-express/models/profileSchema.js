import mongoose from  "mongoose"

const ProfileSchema = new mongoose.Schema(
    {
        displayName : {
            type : String,
            required : [true, "User name wajib di isi"],
            unique : true,
            trim : true
        },
        profilePicture : {
            type : String,
            required : [true, "Profile Picture wajib di isi"],
            unique : true,
            trim : true
        },
        bio : {
            type : String,
            minlength : [10, "minimal 10 karakter"],
            maxlength : [150, "minimal 150 karakter"],
            required : [true, "bio wajib di isi"],
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

const ProfileModel = mongoose.Model("Profile", ProfileSchema)

export default ProfileModel