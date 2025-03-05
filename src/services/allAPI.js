import commonAPI from "./commonAPI";
import SERVER_URL from "./SERVER_URL";

export const registerAPI = async(reqBody) =>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}
export const loginAPI = async(reqBody) =>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}
export const verifyOtpAPI = async(reqBody) =>{
    return await commonAPI("POST",`${SERVER_URL}/verifyOtp`,reqBody)
}
export const addCarAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-car`,reqBody,reqHeader)
}
export const getAllCarsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/viewCar`,{},reqHeader)
}
export const removeCarAPI = async(id,reqHeader) => {
    return await commonAPI("DELETE",`${SERVER_URL}/cars/${id}/remove`,{},reqHeader)
}
export const updateCarAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/cars/${id}/edit`,reqBody,reqHeader)
}
export const createBookingAPI = async(reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/bookings`,reqBody,reqHeader)
}
export const allcarsAPI = async(searchKey,reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/allcars?search=${searchKey}`,{},reqHeader)
}
export const updateBookingAPI = async(bookingId,reqbody,reqHeader) =>{
    return await commonAPI("PUT",`${SERVER_URL}/update/${bookingId}`,reqbody,reqHeader)
}
export const getBookingUpdateId = async(bookingId,reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/${bookingId}`,{},reqHeader)
}
export const getBookingAPI = async(reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/admin/bookings`,{},reqHeader)
}
export const updateBookingStatus = async(id,reqBody,reqHeader) =>{
    return await commonAPI("PUT",`${SERVER_URL}/${id}/status`,reqBody,reqHeader)
}
export const sentBookingPdfAPI = async(id,reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/pdf/${id}`,{},reqHeader)
}
export const getUserBookingAPI = async(reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/user-bookings`,{},reqHeader)
}