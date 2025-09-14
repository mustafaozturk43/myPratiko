export default function (error: any, event: any) {
  console.warn('Server error:', error)
  
  // Return a custom error response
  return {
    statusCode: error.statusCode || 500,
    statusMessage: error.statusMessage || 'Internal Server Error',
    data: {
      message: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Unknown error'
    }
  }
}
