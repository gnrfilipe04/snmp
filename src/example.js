import snmp from "net-snmp";

var session = snmp.createSession ("127.0.0.1", "public");

var oids = ["1.3.6.1.2.1.1.3.0", "1.3.6.1.2.1.1.1.0"];

session.get(oids, (error, varbinds) => {
    if(error){
        console.error(error)
    }else{
        const newArr = varbinds.map(item => {
            if(snmp.isVarbindError(item)){
                console.error(snmp.varbindError(item))
            }else{

                return [
                    {
                        message: item.oid.toString(),
                        messageValue: item.value.toString()
                    }
                ]
            }
        })
        console.log(newArr)
    }
})

