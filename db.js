const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/HOSPITALAPP',{
    useNewUrlParser:true
})

const Patientregister = mongoose.model('Patientregister',{
    firstname:String,
    lastname:String,
    age:Number,
    mobnumber:Number,
    email:String,
    password:String,
    address:String

})

const Adminregister = mongoose.model('Adminregister',{
    adminid:Number,
    password:Number
})

const Doctoradd = mongoose.model('Doctoradd',{
    drname:String,
    spl:String,
    exp:Number,
    drid:Number,
    appid:Number
})

const Surgeryadd= mongoose.model('Surgeryadd',{
    surname:String,
    drname:String,
    surfees:Number,
    surduration:String,
    surid:Number,
    appid:Number

})

const Appoinmentnuero=mongoose.model('Appoinmentnuero',{
    yourtoken:Number,
    drname:String,
    spl:String,
    patientname:String,
    patientage:Number,
    appoinmentdate:Date

})

const Appoinmentortho=mongoose.model('Appoinmentortho',{
    yourtoken:Number,
    drname:String,
    spl:String,
    patientname:String,
    patientage:Number,
    appoinmentdate:Date

})

const Appoinmentdento=mongoose.model('Appoinmentdento',{
    yourtoken:Number,
    drname:String,
    spl:String,
    patientname:String,
    patientage:Number,
    appoinmentdate:Date

})

const Appoinmentphysio=mongoose.model('Appoinmentphysio',{
    yourtoken:Number,
    drname:String,
    spl:String,
    patientname:String,
    patientage:Number,
    appoinmentdate:Date

})

const Appoinmentcardio=mongoose.model('Appoinmentcardio',{
    yourtoken:Number,
    drname:String,
    spl:String,
    patientname:String,
    patientage:Number,
    appoinmentdate:Date

})

const Nuerotoken=mongoose.model('Nuerotoken',{
    initialtoken:Number,
    yourtoken:Number
})

const Orthotoken=mongoose.model('Orthotoken',{
    initialtoken:Number,
    yourtoken:Number
})

const Dentotoken=mongoose.model('Dentotoken',{
    initialtoken:Number,
    yourtoken:Number
})

const Physiotoken=mongoose.model('Physiotoken',{
    initialtoken:Number,
    yourtoken:Number
})

const Cardiotoken=mongoose.model('Cardiotoken',{
    initialtoken:Number,
    yourtoken:Number
})

const Patientreportadd=mongoose.model('patientreportadd',{
    patientname:String,
    reportid:Number,
    testname:String,
    testresult:String,
    testid:Number

})


module.exports={Patientregister,Adminregister,Doctoradd,Surgeryadd,Appoinmentnuero,Appoinmentortho,Appoinmentdento,Appoinmentphysio,Appoinmentcardio,Nuerotoken,Orthotoken,Dentotoken,Physiotoken,Cardiotoken,Patientreportadd}