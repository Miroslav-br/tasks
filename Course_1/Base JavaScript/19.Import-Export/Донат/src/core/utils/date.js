import moment from "moment/moment";

export const getDateFormat = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}