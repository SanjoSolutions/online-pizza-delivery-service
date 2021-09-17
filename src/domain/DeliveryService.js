class DeliveryService {
  /**
   * @param {Order} order
   */
  order(order) {
    const invoice = new Invoice()
    this.emailService.sendEmail(confirmationEmail)
    return new Status()
  }
}
