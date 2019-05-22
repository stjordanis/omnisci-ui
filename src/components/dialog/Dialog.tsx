import React, { FunctionComponent } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@rmwc/dialog"
import { IconButton } from "@rmwc/icon-button"
import { Icon } from "@rmwc/icon"
import { DangerButton, SecondaryButton } from "../button/Button"

/**
 * Dialog properties.
 */
export interface ISimpleDialogProps {
  /** Whether or not the Dialog is showing. */
  open?: boolean
  /** Callback for when the Dialog opens. */
  onOpen?: any
  /** Callback for when the Dialog closes. */
  onClose?: any
  title?: React.ReactNode | string
  message?: React.ReactNode | string
  primaryLabel?: React.ReactNode | string
  secondaryLabel?: React.ReactNode | string
  className?: string
}

export interface IDialogProps {
  /** Whether or not the Dialog is showing. */
  open?: boolean
  /** Callback for when the Dialog opens. */
  onOpen?: any
  /** Callback for when the Dialog closes. */
  onClose?: any
  children?: any
}

/**
 * Dialog
 */
export const SimpleDialog: FunctionComponent<ISimpleDialogProps> = ({
  primaryLabel,
  secondaryLabel,
  message,
  onClose,
  onOpen,
  title,
  open,
  className
}) => {
  const handleAccept = () => onClose("accept")
  const handleCancel = () => onClose("cancel")

  return (
    <Dialog
      className={className}
      open={open}
      onOpen={onOpen}
      preventOutsideDismiss={true}
    >
      <DialogTitle>
        {title}
        <IconButton icon="close" onClick={onClose} ripple={false} />
      </DialogTitle>
      <DialogContent>
        <Icon icon="warning_outline" />
        <div className="dialog-message">{message}</div>
      </DialogContent>
      <DialogActions>
        {secondaryLabel && (
          <SecondaryButton onClick={handleCancel}>
            {secondaryLabel}
          </SecondaryButton>
        )}
        <DangerButton onClick={handleAccept}>{primaryLabel}</DangerButton>
      </DialogActions>
    </Dialog>
  )
}

export const SimpleDangerDialog = (props: IDialogProps) => (
  <SimpleDialog className={"danger"} {...props}>
    {props.children}
  </SimpleDialog>
)

export const SimpleWarningDialog = (props: IDialogProps) => (
  <SimpleDialog className={"warning"} {...props}>
    {props.children}
  </SimpleDialog>
)

export const DangerDialog = (props: IDialogProps) => (
  <Dialog className={"danger"} {...props}>
    {props.children}
  </Dialog>
)

export default {
  DangerDialog,
  SimpleDangerDialog,
  SimpleWarningDialog
}