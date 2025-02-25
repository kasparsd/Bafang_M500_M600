/*
** ###################################################################
**     Processor:           S32K142 with 16 KB SRAM
**     Compiler:            GreenHills ARM Compiler
**
**     Abstract:
**         Linker file for the GreenHills ARM Compiler
**
**     Copyright (c) 2015 Freescale Semiconductor, Inc.
**     Copyright 2017-2018 NXP
**     All rights reserved.
**
**     NXP Confidential. This software is owned or controlled by NXP and may only be
**     used strictly in accordance with the applicable license terms. By expressly
**     accepting such terms or by downloading, installing, activating and/or otherwise
**     using the software, you are agreeing that you have read, and that you agree to
**     comply with and are bound by, such license terms. If you do not agree to be
**     bound by the applicable license terms, then you may not retain, install,
**     activate or otherwise use the software. The production use license in
**     Section 2.3 is expressly granted for this software.
**
**     http:                 www.nxp.com
**
** ###################################################################
*/

/* Specify the memory areas */
MEMORY
{
  /* SRAM_L */
  m_interrupts          (RX)  : ORIGIN = 0x1FFFE000, LENGTH = 0x00000400
  m_text                (RX)  : ORIGIN = 0x1FFFE400, LENGTH = 0x00001C00

  /* SRAM_U */
  m_data                (RW)  : ORIGIN = 0x20000000, LENGTH = 0x00001000
}

/* Define output sections */
SECTIONS
{
  // Defaults
  HEAP_SIZE  = isdefined(__heap_size__)  ? __heap_size__  : 0x00000400;
  STACK_SIZE = isdefined(__stack_size__) ? __stack_size__ : 0x00000400;

  /* The startup code goes first into internal RAM */
  .interrupts :
  {
    __VECTOR_TABLE = .;
    __interrupts_start__ = .;
    . = ALIGN(4);
    "*(.isr_vector)"         /* Startup code */   
    __interrupts_end__ = .;
    . = ALIGN(4);
  } > m_interrupts

  __VECTOR_RAM = __VECTOR_TABLE;
  __RAM_VECTOR_TABLE_SIZE = 0x0;

  /* The program code and other data goes into internal RAM */
  .text :
  {
    . = ALIGN(4);
    "*(.text)"               /* .text sections (code) */
    "*(.text*)"              /* .text* sections (code) */
    "*(.rodata)"             /* .rodata sections (constants, strings, etc.) */
    "*(.rodata*)"            /* .rodata* sections (constants, strings, etc.) */
    . = ALIGN(4);
  } > m_text

  /* Section for storing functions that needs to execute from RAM */
  .code_ram :
  {
    . = ALIGN(4);
    __CODE_RAM = .;
    __code_ram_start__ = .;
    *(.code_ram)               /* Custom section for storing code in RAM */
    __CODE_ROM = .;            /* Symbol is used by start-up for data initialization. */
    __CODE_END = .;            /* No copy */
    __code_ram_end__ = .;
    . = ALIGN(4);
  } > m_text

  __etext = .;    /* Define a global symbol at end of code. */
  __DATA_ROM = .; /* Symbol is used by startup for data initialization. */
  __DATA_END = __DATA_ROM; /* No copy */

  /* Custom Section Block that can be used to place data at absolute address. */
  /* Use __attribute__((section (".customSection"))) to place data here. */
  .customSectionBlock :
  {
    __customSection_start__ = .;
    "*(.customSection)"      /* Keep section even if not referenced. */
    __customSection_end__ = .;
    __CUSTOM_ROM = .;
    __CUSTOM_END = .;
  } > m_data

  .data :
  {
    . = ALIGN(4);
    __DATA_RAM = .;
    __data_start__ = .;      /* Create a global symbol at data start. */
    "*(.data)"               /* .data sections */
    "*(.data*)"              /* .data* sections */
    . = ALIGN(4);
    __data_end__ = .;        /* Define a global symbol at data end. */
  } > m_data

  /* Uninitialized data section. */
  .bss :
  {
    /* This is used by the startup in order to initialize the .bss section. */
    . = ALIGN(4);
    __BSS_START = .;
    __bss_start__ = .;
    "*(.bss)"
    "*(.bss*)"
    "*(COMMON)"
    . = ALIGN(4);
    __bss_end__ = .;
    __BSS_END = .;
  } > m_data

   /* Put heap section after the program data */
  .heap :
  {
    . = ALIGN(8);
    __end__ = .;
    __heap_start__ = .;
    PROVIDE(end = .);
    PROVIDE(_end = .);
    PROVIDE(__end = .);
    __HeapBase = .;
    . += HEAP_SIZE;
    __HeapLimit = .;
    __heap_limit = .;
    __heap_end__ = .;
  } > m_data

  /* Initializes stack on the end of block */
  __StackTop   = addr(m_data) + sizeof(m_data);
  __StackLimit = __StackTop - STACK_SIZE;
  PROVIDE(__stack = __StackTop);

  .stack __StackLimit :
  {
    . = ALIGN(8);
    __stack_start__ = .;
    . += STACK_SIZE;
    __stack_end__ = .;
  } > m_data

  .ARM.attributes :
  {
    *(.ARM.attributes)
  }

  /DISCARD/ : {
  *(.FlashConfig)
  }
}

