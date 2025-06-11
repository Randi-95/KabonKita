export const formatToDate = (isoString) => {
  if (!isoString) {
    return "Tanggal tidak tersedia";
  }

  const dateObject = new Date(isoString);

  if (isNaN(dateObject.getTime())) {
    return "Format tanggal salah";
  }

  const options = {
    timeZone: 'Asia/Jakarta', 
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return dateObject.toLocaleDateString('id-ID', options);
};