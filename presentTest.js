let months = ["Jan","March","April","June"];

//จะทำการ insert ข้อมูลลงใน array ผ่าน method splice กันครับ
months.splice(1,0,"Feb");
//โดยเราจะพิมพ์ชื่อ array.method นะครับ ซึ่งในที่นี้ก็จะเป็น months.splice
//ต่อมา Parameter ข้างใน ตัวแรกเราก็จะใส่ตำแหน่งของข้อมูลที่เราจะ insert เข้าไปใน array ครับ
//สมมติว่าผมต้องการจะ insert ข้อมูลลงไปในตำแหน่งที่ 1 หรือก็คือตรง March ผมก็จะพิมพ์ 1 ลงไปใน parameter ตัวแรก
//ส่วน Parameter ตัวที่ 2 จะเป็นจำนวนข้อมูลที่เราต้องการจะลบ ในตอนนี้เราต้องการแค่insertเฉยๆ ไม่ได้ต้องการลบข้อมูลอะไร ก้ใส่ 0 ลงไป
//ส่วนตำแหน่งสุดท้ายคือข้อมูลที่ผมต้องการใส่เพิ่มเข้าไป สมมติว่าผมต้องการเพิ่มข้อมูล "Feb" ลงไป ผมก็พิมพื "Feb" ลงไป
console.log(months);
//พอลองรันดูก็จะได้ผลลัพธ์ดังนี้ครับ
//[ 'Jan', 'Feb', 'March', 'April', 'June' ]

//แล้วถ้าเราต้องการ insert ข้อมูลมากกว่า 1 ตัวล่ะ
//เราก็แค่พิมพ์เพิ่ม Parameter ที่เป็นข้อมูลลงไป
//อย่างสมมติว่าผมต้องการ insert "Feb" กับ "May" ลงไปใน array ผมก็พิมพ์ว่า
months.splice(1,0,"Feb","May");
console.log(months);
//พอลองรันดูก็จะได้ผลลัพธ์ดังนี้ครับ
//[ 'Jan', 'Feb', 'May', 'March', 'April', 'June' ]
//จะเห็นได้ว่า "Feb" จะถูกแทนลงไปในตำแหน่งที่ 1 ตามค่า Parameter ตัวแรกที่เรากรอกไป ส่วน "May" จะถูก insert เข้ามาในตำแหน่งถัดไป 

//-------------------------------------------------------------------------------------------------------------------
//มาพูดถึงการ delete ข้อมูลกันบ้างดีกว่า
//หากเราต้องการ delete ข้อมูลเราก็แค่ใส่ Parameter ตัวที่ 1 กับ2 ลงไป
//ตัวที่ 1 คือตำแหน่งข้อมูลที่เราต้องการจะลบ ส่วนตัวที่สองคือจำนวนข้อมูลที่เราต้องการจะลบ เช่น
months.splice(1,1);
//ถ้าเราต้องการลบข้อมูลในตำแหน่งที่ 1 แค่ตัวเดียว เราก็แค่กรอก Parameter ตามนี้
console.log(months);
//พอลองรันดูก็จะได้ผลลัพธ์ดังนี้ครับ
//[ 'Jan', 'April', 'June' ]

//แล้วถ้าเราเปลี่ยน Parameter ตัวที่ 2 ละจะเป็นยังไง
months.splice(1,2);
//สมมติว่าเราเปลี่ยน Parameter ตัวที่ 2 เป็น 2
console.log(months);
//พอลองรันดูก็จะได้ผลลัพธ์ดังนี้ครับ
//[ 'Jan', 'June' ]
//จะเห็นได้ว่ามันจะทำการลบข้อมูลไปทั้งหมด 2 ตัว โดยเริ่มลบจากตำแหน่งที่ 1 ขึ้นไป 

//แล้วถ้าเราไม่ใส่ Parameter ตัวที่ 2 กับ 3 ล่ะจะเป็นยังไง
months.splice(1);
console.log(months);
//พอลองรันดูก็จะได้ผลลัพธ์ดังนี้ครับ
//[ 'Jan' ]
//อย่างที่เห็นว่ามันจะขึ้นแค่ 'Jan' ที่เป็นข้อมูลตำแหน่งที่ 0 เท่านั้น
//แล้วทำไมมันถึงเป็นแบบนั้น
//นั่นก็เพราะเราไม่ได้กำหนดจำนวนที่เราจะลบลงไป มันจึงทำการ set ให้ parameter ตัวที่สองมีค่าเท่ากับ array.length - ค่า Parameter ตัวแรก
//หรือก็คือมันจะลบข้อมูลตั้งแต่ตำแหน่งของค่า Parameter ขึ้นไป
//จะเห็นได้จากตัวอย่างที่ข้อมูลตำแหน่งที่ 1 ถูกลบหมดเลยนั่นเอง

//-------------------------------------------------------------------------------------------------------------------
//นอกจากการ insert กับการ delete แล้ว method splice ยังสามารถ replace ได้ด้วย
//โดยการ replace คือการนำการ insert และการ delete มาใช้ร่วมกัน
//โดยการ insert ข้อมูลที่ต้องการ และ delete ข้อมูลที่เราต้องการที่จะแทนที่
//เราจะมาลองกันโดยการแทนที่ข้อมูลตำแหน่งที่ 1 หรือ "March" ด้วย "Feb" 
//ซึ่งเราจะสามารถเขียนได้โดยการ
months.splice(1,1,"Feb");
console.log(months);
//พอลองรันดูก็จะได้ผลลัพธ์ดังนี้ครับ
//[ 'Jan', 'Feb', 'April', 'June' ]

//และถ้าหากเราเพิ่ม Parameter เข้าไปอีกล่ะ
//สมมติว่าเราใส่ Parameter "May" เข้าไปอีกล่ะ
months.splice(1,1,"Feb","May");
console.log(months);
//พอลองรันดูก็จะได้ผลลัพธ์ดังนี้ครับ
//[ 'Jan', 'Feb', 'May', 'April', 'June' ]
//จะเห็นว่ามีการ replace จาก "March" เป็น "Feb" เหมือนเดิม แต่เพิ่มเติมคือมีการ insert "May" ในตำแหน่งถัดไป

//ไปที่ตัวอย่างที่ข้อต่อไปได้เลยครับ