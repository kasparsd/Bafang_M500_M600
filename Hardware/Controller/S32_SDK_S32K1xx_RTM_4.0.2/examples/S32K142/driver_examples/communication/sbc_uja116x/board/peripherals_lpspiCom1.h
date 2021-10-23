/***********************************************************************************************************************
 * This file was generated by the S32 Config Tools. Any manual edits made to this file
 * will be overwritten if the respective S32 Config Tools is used to update this file.
 **********************************************************************************************************************/

#ifndef lpspiCom1_H
#define lpspiCom1_H

/**
 * @page misra_violations MISRA-C:2012 violations
 *
 * @section [global]
 * Violates MISRA 2012 Advisory Rule 2.5, Global macro not referenced.
 * The global macro will be used in function call of the module.
 *
 */
/*******************************************************************************
 * Included files 
 ******************************************************************************/
#include "lpspi_master_driver.h"
#include "lpspi_slave_driver.h"
#include "lpspi_shared_function.h"

/*******************************************************************************
 * Definitions 
 ******************************************************************************/
/*! @brief Device instance number */
#define INST_LPSPICOM1  1U

/*******************************************************************************
 * Global variables 
 ******************************************************************************/
/* Define state structure for current SPI instance */
extern  lpspi_state_t lpspiCom1State;

/* LPSPI Master Configurations 0 */
extern lpspi_master_config_t lpspiCom1_MasterConfig0;

/* LPSPI Slave Configurations 0 */
extern lpspi_slave_config_t lpspiCom1_SlaveConfig0;




#endif /* lpspiCom1_H */