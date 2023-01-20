const db = require('./db')

const register=(firstname,lastname,age,mobnumber,email,password,address)=>{
    return db.Patientregister.findOne({email})
    .then(user=>{
        if(user){
            return{
                statuscode:400,
                status:false,
                message:"user already exists"
            }
        }
        else{
            const newuser=new db.Patientregister({
                "firstname":firstname,
                "lastname":lastname,
                "age":age,
                "mobnumber":mobnumber,
                "email":email,
                "password":password,
                "address":address
            })
            newuser.save()
            return{
                statuscode:200,
                status:true,
                message:"New user registered successfully",
                
            }
        }
    })
}

const login =(email,password)=>{
    return db.Patientregister.findOne({email,password})
    .then(user=>{
        if(user){
            
            return{
                statuscode:200,
                status:true,
                message:"login successfull",
                
                
                
            }
        }
        else{
            return{
                statuscode:400,
                status:false,
                message:"incorrect password or email"
            }
        }
    })
}

const adminlogin=(adminid,password)=>{
    return db.Adminregister.findOne({adminid,password})
    .then(user=>{
        if(user){
            return{
                statuscode:200,
                status:true,
                message:"login successfull"
            }
        }
        else{
            return{
                statuscode:400,
                status:false,
                message:"not an admin"
            }
        }
    })
}

const doctoradd=(drname,spl,exp,drid,appid)=>{
    return db.Doctoradd.findOne({drname,drid})
    .then(user=>{
        if(user){
            return{
                statuscode:400,
                status:false,
                message:"dr already exists in the database",
                
            }
        }
        else{
            const newdr=new db.Doctoradd({
                "drname":drname,
                "spl":spl,
                "exp":exp,
                "drid":drid,
                "appid":appid
            })
            newdr.save()
            return{
                statuscode:200,
                status:true,
                message:"doctor registered successfully",
                drid,
                appid
            }

        }
    })

}

const availabledoctor=()=>{
    return db.Doctoradd.find()
    .then(result=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                result:result
            }
        }
    })
}

const surgeryadd = (surname,drname,surfees,surduration,surid,appid)=>{
    return db.Surgeryadd.findOne({surname,surid})
    .then(result=>{
        if(result){
            return{
                statuscode:400,
                status:false,
                message:"this suregery already in the database"
            }
        }
        else{
            const newsurgery = new db.Surgeryadd({
                "surname":surname,
                "drname":drname,
                "surfees":surfees,
                "surduration":surduration,
                "surid":surid,
                "appid":appid
            })
            newsurgery.save()
            return{
                statuscode:200,
                status:true,
                message:"new surgery added succesfully"
            }
        }
    })

}

const availablesurgery = ()=>{
    return db.Surgeryadd.find()
    .then(result=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                result:result
            }
        }
    })
}

const appoinmentpopup = (drid)=>{
    return db.Doctoradd.findOne({"drid":drid})
    .then((result)=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                name:result.drname,
                spl:result.spl
            }
        }
        else{
            return{
                statuscode:400,
                status:false,
                message:"no such id"
            }
        }
    })

}

const appoinmentnuero = (drname,spl,patientname,patientage,appoinmentdate)=>{
    return db.Appoinmentnuero.findOne({patientname,patientage})
    .then((result)=>{
        if(result){
            return{
                statuscode:400,
                status:false,
                message:"this patient is already registered for this day"
            }
        }
        else{
            return db.Nuerotoken.findOne({"initialtoken":1})
            .then(code=>{
                if(code){
                    yourtoken=code.yourtoken
                    const newappoinment = new db.Appoinmentnuero({
                        "yourtoken":yourtoken,
                        "drname":drname,
                        "spl":spl,
                        "patientname":patientname,
                        "patientage":patientage,
                        "appoinmentdate":appoinmentdate
                    })
                    newappoinment.save()
                    code.yourtoken=code.yourtoken+1
                    code.save()

                }
                return{
                    statuscode:200,
                    status:true,
                    message:`your appoinment is succesfully registered in nuero and your appoinment token number  is ${yourtoken} `
                }
            })    
        }

    })

}

const appoinmentortho = (drname,spl,patientname,patientage,appoinmentdate)=>{
    return db.Appoinmentortho.findOne({patientname,patientage})
    .then((result)=>{
        if(result){
            return{
                statuscode:400,
                status:false,
                message:"this patient is already registered for this day"
            }
        }
        else{
            return db.Orthotoken.findOne({"initialtoken":1})
            .then(code=>{
                if(code){
                    yourtoken=code.yourtoken
                    const newappoinment = new db.Appoinmentortho({
                        "yourtoken":yourtoken,
                        "drname":drname,
                        "spl":spl,
                        "patientname":patientname,
                        "patientage":patientage,
                        "appoinmentdate":appoinmentdate
                    })
                    newappoinment.save()
                    code.yourtoken=code.yourtoken+1
                    code.save()
                    

                }
                return{
                    statuscode:200,
                    status:true,
                    message:`your appoinment is succesfully registered in ortho and your appoinment token is ${yourtoken} `
                }
            })
            
            
            
        }

    })

}

const appoinmentdento = (drname,spl,patientname,patientage,appoinmentdate)=>{
    return db.Appoinmentdento.findOne({patientname,patientage})
    .then((result)=>{
        if(result){
            return{
                statuscode:400,
                status:false,
                message:"this patient is already registered for this day"
            }
        }
        else{
            return db.Dentotoken.findOne({"initialtoken":1})
            .then(code=>{
                if(code){
                    yourtoken=code.yourtoken
                    const newappoinment = new db.Appoinmentdento({
                        "yourtoken":yourtoken,
                        "drname":drname,
                        "spl":spl,
                        "patientname":patientname,
                        "patientage":patientage,
                        "appoinmentdate":appoinmentdate
                    })
                    newappoinment.save()
                    code.yourtoken=code.yourtoken+1
                    code.save()


                }
                return{
                    statuscode:200,
                    status:true,
                    message:`your appoinment is succesfully registered in dento and your appoinment token is ${yourtoken} `
                }
            })
              
        }

    })

}

const appoinmentphysio = (drname,spl,patientname,patientage,appoinmentdate)=>{
    return db.Appoinmentphysio.findOne({patientname,patientage})
    .then((result)=>{
        if(result){
            return{
                statuscode:400,
                status:false,
                message:"this patient is already registered for this day"
            }
        }
        else{
            return db.Physiotoken.findOne({"initialtoken":1})
            .then(code=>{
                if(code){
                    yourtoken=code.yourtoken
                    const newappoinment = new db.Appoinmentphysio({
                        "yourtoken":yourtoken,
                        "drname":drname,
                        "spl":spl,
                        "patientname":patientname,
                        "patientage":patientage,
                        "appoinmentdate":appoinmentdate
                    })
                    newappoinment.save()
                    code.yourtoken=code.yourtoken+1
                    code.save()

                }
                return{
                    statuscode:200,
                    status:true,
                    message:`your appoinment is succesfully registered in physio and your appoinment token is ${yourtoken} `
                }

            })
            
           
          
        }

    })

}

const appoinmentcardio = (drname,spl,patientname,patientage,appoinmentdate)=>{
    return db.Appoinmentcardio.findOne({patientname,patientage})
    .then((result)=>{
        if(result){
            return{
                statuscode:400,
                status:false,
                message:"this patient is already registered for this day"
            }
        }
        else{
            return db.Cardiotoken.findOne({"initialtoken":1})
            .then(code=>{
                if(code){
                    yourtoken=code.yourtoken
                    const newappoinment = new db.Appoinmentcardio({
                        "yourtoken":yourtoken,
                        "drname":drname,
                        "spl":spl,
                        "patientname":patientname,
                        "patientage":patientage,
                        "appoinmentdate":appoinmentdate
                    })
                    newappoinment.save()
                    code.yourtoken=code.yourtoken+1
                    code.save()

                }
                return{
                    statuscode:200,
                    status:true,
                    message:`your appoinment is succesfully registered in physio and your appoinment token is ${yourtoken} `
                }
            })
           
           
            
        }

    })

}

const doctorlogin = (drname,drid)=>{
    return db.Doctoradd.findOne({drname,drid})
    .then((result)=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                message:"login successfull",
                drid
            }
        }
        else{
            return{
                statuscode:400,
                status:false,
                message:"not a doctor"
            }
        }
    })
}

const nueropatients = ()=>{
    return db.Appoinmentnuero.find()
    .then(result=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                result:result
            }
        }
    })
}

const orthopatients = ()=>{
    return db.Appoinmentortho.find()
    .then(result=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                result:result
            }
        }
    })
}

const dentopatients = ()=>{
    return db.Appoinmentdento.find()
    .then(result=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                result:result
            }
        }
    })
}

const physiopatients = ()=>{
    return db.Appoinmentphysio.find()
    .then(result=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                result:result
            }
        }
    })
}

const cardiopatients = ()=>{
    return db.Appoinmentcardio.find()
    .then(result=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                result:result
            }
        }
    })
}

const patientreportadd = (patientname,reportid,testname,testresult,testid)=>{
    return db.Patientreportadd.findOne({reportid,testname,testresult})
    .then(result=>{
        if(result){
            return{
                statuscode:400,
                status:false,
                message:"this patients test result is already added"
            }
        }
        else{
            const newpatientreportadd=new db.Patientreportadd({
                "patientname":patientname,
                "reportid":reportid,
                "testname":testname,
                "testresult":testresult,
                "testid":testid
            })
            newpatientreportadd.save()
            return{
                statuscode:200,
                status:true,
                message:"patient test details is succesfully added"
            }
        }
    })

}

const reportid = (reportid)=>{
    return db.Patientreportadd.find({reportid})
    .then(result=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                result:result
            }


        }
        else{
            return{
                statuscode:400,
                status:false,
                message:"no such id"
            }

        }
    })
}

const deletedoctordata = (drname)=>{
    return db.Doctoradd.deleteOne({drname})
    .then(result=>{
        if(result==null){
            return{
                statuscode:400,
                status:false,
                message:"no such doctor in database"
            }
        }
        else{
            return{
                statuscode:200,
                status:true,
                message:"doctor data succesfully deleted"
            }
        }
    })
}

const deletesurgerydata = (surid)=>{
    return db.Surgeryadd.deleteOne({surid})
    .then(result=>{
        if(result==null){
            return{
                statuscode:400,
                status:false,
                message:"no such doctor in database"
            }
        }
        else{
            return{
                statuscode:200,
                status:true,
                message:"doctor data succesfully deleted"
            }
        }
    })
}

const deletereportdata = (testid)=>{
    return db.Patientreportadd.deleteOne({testid})
    .then(result=>{
        if(result==null){
            return{
                statuscode:400,
                status:false,
                message:"no such doctor in database"
            }
        }
        else{
            return{
                statuscode:200,
                status:true,
                message:"report data succesfully deleted"
            }
        }
    })
}

const updatedoctordata = (drname,newdrname)=>{
    return db.Doctoradd.findOne({drname})
    .then(result=>{
        if(result){
            result.drname=newdrname
            result.save()
            return{
                statuscode:200,
                status:true,
                message:"updated successfully",

            } 
        }
        else{
            return{
                statuscode:400,
                status:false,
                message:"cannot update"
            }
        }
    })

}

const updatesurgerydata = (surfees,newsurfees)=>{
    return db.Surgeryadd.findOne({surfees})
    .then(result=>{
        if(result){
            result.surfees=newsurfees
            result.save()
            return{
                statuscode:200,
                status:true,
                message:"updated successfully",

            } 
        }
        else{
            return{
                statuscode:400,
                status:false,
                message:"cannot update"
            }
        }
    })

}



module.exports={register,login,adminlogin,doctoradd,availabledoctor,surgeryadd,availablesurgery,appoinmentpopup,appoinmentnuero,appoinmentortho,appoinmentdento,appoinmentphysio,appoinmentcardio,doctorlogin,nueropatients,orthopatients,dentopatients,physiopatients,cardiopatients,patientreportadd,reportid,deletedoctordata,deletesurgerydata,deletereportdata,updatedoctordata,updatesurgerydata}
