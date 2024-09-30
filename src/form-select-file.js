import React from "react";

export default function FormSelectFile(){
    const inputFile = React.useRef()
    const selectMaxNumFile = React.useRef()
    const selectMaxSize = React.useRef()

    let maxNumfiles = [1,2,3,4,5]
    let maxSize = [50,100,200,500,1000]

    const onClickButton =()=>{
        let maxNumfiles = selectMaxNumFile.current.value
        let maxSize = selectMaxSize.current.value
        //ตรวจสอบจน.ไฟล์
        if(inputFile.current.files.length > maxNumfiles){
            alert(`เลือกได้ไม่เกิน ${maxNumfiles} ไฟล์`)
            return
        }

        //ตรวจสอบขนาดของแต่ละไฟล์
        for(let f of inputFile.current.files){
            if(f.size > maxSize*1000){
                alert(`ขนาดของแต่ละไฟล์ไม่เกิน ${maxSize} KB`)
                return
            }   
        }
        alert('Files Ok')
    }
    return(
        <div className="mt-4 mx-auto p-3 rounded"
        style={{width:'400px',backgroundColor:'#cee'}}>

        <form>
            <div className="form-group mb-3">
                <label htmlFor="maxNumFile" className="form-lable">จำนวนไฟล์สูงสุด</label>
                <select id="maxNumFile" className="form-select form-select-sm" ref={selectMaxNumFile}>
                {
                    maxNumfiles.map(i=>{
                        return <option value={i}>{i}</option>
                    })
                }
                </select>

            </div>

            <div className="form-group mb-3">
                <label htmlFor="maxSize" className="form-lable">ขนาดไฟล์สูงสุด (KB)</label>
                <select id="maxFileSize" className="form-select form-select-sm" ref={selectMaxSize}>
                    {
                        maxSize.map(i=>{
                            return <option value={i}>{i}</option>
                        })
                    }
                </select>
            </div>

            <div className="from-group mb-3">
                <label htmlFor="file" className="form-lable">เลือกไฟล์</label>
                <input type="file" id="file" accept="image/*"
                    className="form-control form-control-sm" ref={inputFile} multiple/>
            </div>

            <div className="text-center mt-4">
                <button type="button" className="btn btn-sm btn-primary px-4"
                    onClick={onClickButton}>OK
                </button>
            </div>
        </form>
        </div>
    )
}