const ds = require('./dataservice')
const express=require('express')
const cors=require('cors')



const app=express()
app.use(express.json())

app.use(cors({
    origin:'http://localhost:4200'
}))

app.post('/register',(req,res)=>{
    return ds.register(req.body.firstname,req.body.lastname,req.body.age,req.body.mobnumber,req.body.email,req.body.password,req.body.address)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/adminlogin',(req,res)=>{
    return ds.adminlogin(req.body.adminid,req.body.password)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })
})

app.post('/login',(req,res)=>{
    return ds.login(req.body.email,req.body.password)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/doctoradd',(req,res)=>{
    return ds.doctoradd(req.body.drname,req.body.spl,req.body.exp,req.body.drid,req.body.appid)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    }) 
})

app.post('/availabledoctor',(req,res)=>{
    return ds.availabledoctor()
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })
})

app.post('/surgeryadd',(req,res)=>{
    return ds.surgeryadd(req.body.surname,req.body.drname,req.body.surfees,req.body.surduration,req.body.surid,req.body.appid)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })
})

app.post('/availablesurgery',(req,res)=>{
    return ds.availablesurgery()
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })
})

app.post('/appoinmentpopup', (req,res)=>{
    return ds.appoinmentpopup(req.body.drid)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })
})

app.post('/appoinmentnuero',(req,res)=>{
    return ds.appoinmentnuero(req.body.drname,req.body.spl,req.body.patientname,req.body.patientage,req.body.appoinmentdate)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/appoinmentortho',(req,res)=>{
    return ds.appoinmentortho(req.body.drname,req.body.spl,req.body.patientname,req.body.patientage,req.body.appoinmentdate)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/appoinmentdento',(req,res)=>{
    return ds.appoinmentdento(req.body.drname,req.body.spl,req.body.patientname,req.body.patientage,req.body.appoinmentdate)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/appoinmentphysio',(req,res)=>{
    return ds.appoinmentphysio(req.body.drname,req.body.spl,req.body.patientname,req.body.patientage,req.body.appoinmentdate)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/appoinmentcardio',(req,res)=>{
    return ds.appoinmentcardio(req.body.drname,req.body.spl,req.body.patientname,req.body.patientage,req.body.appoinmentdate)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/doctorlogin',(req,res)=>{
    return ds.doctorlogin(req.body.drname,req.body.drid)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/nueropatients',(req,res)=>{
    return ds.nueropatients()
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/orthopatients',(req,res)=>{
    return ds.orthopatients()
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/dentopatients',(req,res)=>{
    return ds.dentopatients()
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/physiopatients',(req,res)=>{
    return ds.physiopatients()
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/cardiopatients',(req,res)=>{
    return ds.cardiopatients()
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })

})

app.post('/patientreportadd',(req,res)=>{
    return ds.patientreportadd(req.body.patientname,req.body.reportid,req.body.testname,req.body.testresult,req.body.testid)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })
})

app.post('/reportid',(req,res)=>{
    return ds.reportid(req.body.reportid)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })
})

app.delete('/deletedoctordata/:drname',(req,res)=>{
    return ds.deletedoctordata(req.params.drname)
    .then(user=>{
        res.status(user.statuscode).json(user)
    })

})

app.delete('/deletesurgerydata/:surid',(req,res)=>{
    return ds.deletesurgerydata(req.params.surid)
    .then(user=>{
        res.status(user.statuscode).json(user)
    })
})

app.delete('/deletereportdata/:testid',(req,res)=>{
    return ds.deletereportdata(req.params.testid)
    .then(user=>{
        res.status(user.statuscode).json(user)
    })

})

app.post('/updatedoctordata',(req,res)=>{
    return ds.updatedoctordata(req.body.drname,req.body.newdrname)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
        
    })

})

app.post('/updatesurgerydata',(req,res)=>{
    return ds.updatesurgerydata(req.body.surfees,req.body.newsurfees)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
        
    })

})

app.listen(3000,()=>{
    console.log("server listening to port number 3000");
})
