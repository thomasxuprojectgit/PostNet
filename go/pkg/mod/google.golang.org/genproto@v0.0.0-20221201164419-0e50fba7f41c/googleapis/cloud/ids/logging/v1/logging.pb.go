// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.12.2
// source: google/cloud/ids/logging/v1/logging.proto

package logging

import (
	reflect "reflect"
	sync "sync"

	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	durationpb "google.golang.org/protobuf/types/known/durationpb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Describes the type of severity of the threat.
type ThreatLog_Severity int32

const (
	// Default value - should never be used.
	ThreatLog_SEVERITY_UNSPECIFIED ThreatLog_Severity = 0
	ThreatLog_LOW                  ThreatLog_Severity = 2
	ThreatLog_MEDIUM               ThreatLog_Severity = 3
	ThreatLog_HIGH                 ThreatLog_Severity = 4
	ThreatLog_CRITICAL             ThreatLog_Severity = 5
	ThreatLog_INFORMATIONAL        ThreatLog_Severity = 6
)

// Enum value maps for ThreatLog_Severity.
var (
	ThreatLog_Severity_name = map[int32]string{
		0: "SEVERITY_UNSPECIFIED",
		2: "LOW",
		3: "MEDIUM",
		4: "HIGH",
		5: "CRITICAL",
		6: "INFORMATIONAL",
	}
	ThreatLog_Severity_value = map[string]int32{
		"SEVERITY_UNSPECIFIED": 0,
		"LOW":                  2,
		"MEDIUM":               3,
		"HIGH":                 4,
		"CRITICAL":             5,
		"INFORMATIONAL":        6,
	}
)

func (x ThreatLog_Severity) Enum() *ThreatLog_Severity {
	p := new(ThreatLog_Severity)
	*p = x
	return p
}

func (x ThreatLog_Severity) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ThreatLog_Severity) Descriptor() protoreflect.EnumDescriptor {
	return file_google_cloud_ids_logging_v1_logging_proto_enumTypes[0].Descriptor()
}

func (ThreatLog_Severity) Type() protoreflect.EnumType {
	return &file_google_cloud_ids_logging_v1_logging_proto_enumTypes[0]
}

func (x ThreatLog_Severity) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ThreatLog_Severity.Descriptor instead.
func (ThreatLog_Severity) EnumDescriptor() ([]byte, []int) {
	return file_google_cloud_ids_logging_v1_logging_proto_rawDescGZIP(), []int{0, 0}
}

type ThreatLog_Direction int32

const (
	// Default value - permitted since Direction is optional.
	ThreatLog_DIRECTION_UNDEFINED ThreatLog_Direction = 0
	// Ingress traffic.
	ThreatLog_CLIENT_TO_SERVER ThreatLog_Direction = 1
	// Egress traffic.
	ThreatLog_SERVER_TO_CLIENT ThreatLog_Direction = 2
)

// Enum value maps for ThreatLog_Direction.
var (
	ThreatLog_Direction_name = map[int32]string{
		0: "DIRECTION_UNDEFINED",
		1: "CLIENT_TO_SERVER",
		2: "SERVER_TO_CLIENT",
	}
	ThreatLog_Direction_value = map[string]int32{
		"DIRECTION_UNDEFINED": 0,
		"CLIENT_TO_SERVER":    1,
		"SERVER_TO_CLIENT":    2,
	}
)

func (x ThreatLog_Direction) Enum() *ThreatLog_Direction {
	p := new(ThreatLog_Direction)
	*p = x
	return p
}

func (x ThreatLog_Direction) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ThreatLog_Direction) Descriptor() protoreflect.EnumDescriptor {
	return file_google_cloud_ids_logging_v1_logging_proto_enumTypes[1].Descriptor()
}

func (ThreatLog_Direction) Type() protoreflect.EnumType {
	return &file_google_cloud_ids_logging_v1_logging_proto_enumTypes[1]
}

func (x ThreatLog_Direction) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ThreatLog_Direction.Descriptor instead.
func (ThreatLog_Direction) EnumDescriptor() ([]byte, []int) {
	return file_google_cloud_ids_logging_v1_logging_proto_rawDescGZIP(), []int{0, 1}
}

// A threat detected by Cloud IDS.
type ThreatLog struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of the threat, e,g. "Suspicious HTTP Evasion"
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Unique ID of the threat.
	ThreatId string `protobuf:"bytes,13,opt,name=threat_id,json=threatId,proto3" json:"threat_id,omitempty"`
	// The time of the alert.
	AlertTime *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=alert_time,json=alertTime,proto3" json:"alert_time,omitempty"`
	// Severity of threat.
	AlertSeverity ThreatLog_Severity `protobuf:"varint,19,opt,name=alert_severity,json=alertSeverity,proto3,enum=google.cloud.ids.logging.v1.ThreatLog_Severity" json:"alert_severity,omitempty"`
	// The type of the threat, e.g. "Spyware".
	Type string `protobuf:"bytes,4,opt,name=type,proto3" json:"type,omitempty"`
	// Category (sub-type) of the threat, e.g. "code-execution".
	Category string `protobuf:"bytes,18,opt,name=category,proto3" json:"category,omitempty"`
	// The source IP Address of the packet, e.g. "35.191.8.79"
	SourceIpAddress string `protobuf:"bytes,5,opt,name=source_ip_address,json=sourceIpAddress,proto3" json:"source_ip_address,omitempty"`
	// The source port of the packet, e.g. 8080
	SourcePort int32 `protobuf:"varint,6,opt,name=source_port,json=sourcePort,proto3" json:"source_port,omitempty"`
	// The destination IP Address of the packet, e.g. "192.168.100.2"
	DestinationIpAddress string `protobuf:"bytes,7,opt,name=destination_ip_address,json=destinationIpAddress,proto3" json:"destination_ip_address,omitempty"`
	// The destination port of the packet, e.g. 100
	DestinationPort int32 `protobuf:"varint,8,opt,name=destination_port,json=destinationPort,proto3" json:"destination_port,omitempty"`
	// The IP protocol of the packet, e.g. "TCP".
	IpProtocol string `protobuf:"bytes,9,opt,name=ip_protocol,json=ipProtocol,proto3" json:"ip_protocol,omitempty"`
	// The direction of the packet - an optional field.
	Direction ThreatLog_Direction `protobuf:"varint,10,opt,name=direction,proto3,enum=google.cloud.ids.logging.v1.ThreatLog_Direction" json:"direction,omitempty"`
	// ID of the Layer 4 session of the threat.
	SessionId string `protobuf:"bytes,14,opt,name=session_id,json=sessionId,proto3" json:"session_id,omitempty"`
	// Number of sessions with same source IP, destination IP, application, and
	// type seen within 5 seconds.
	RepeatCount string `protobuf:"bytes,15,opt,name=repeat_count,json=repeatCount,proto3" json:"repeat_count,omitempty"`
	// Application associated with the session.
	Application string `protobuf:"bytes,16,opt,name=application,proto3" json:"application,omitempty"`
	// Variable field. URI or filename of the relevant threat, if applicable.
	UriOrFilename string `protobuf:"bytes,17,opt,name=uri_or_filename,json=uriOrFilename,proto3" json:"uri_or_filename,omitempty"`
	// CVE IDs of the threat.
	Cves []string `protobuf:"bytes,20,rep,name=cves,proto3" json:"cves,omitempty"`
	// Details of the threat reported by the IDS VM
	Details string `protobuf:"bytes,11,opt,name=details,proto3" json:"details,omitempty"`
	// The network associated with the IDS Endpoint.
	Network string `protobuf:"bytes,12,opt,name=network,proto3" json:"network,omitempty"`
}

func (x *ThreatLog) Reset() {
	*x = ThreatLog{}
	if protoimpl.UnsafeEnabled {
		mi := &file_google_cloud_ids_logging_v1_logging_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ThreatLog) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ThreatLog) ProtoMessage() {}

func (x *ThreatLog) ProtoReflect() protoreflect.Message {
	mi := &file_google_cloud_ids_logging_v1_logging_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ThreatLog.ProtoReflect.Descriptor instead.
func (*ThreatLog) Descriptor() ([]byte, []int) {
	return file_google_cloud_ids_logging_v1_logging_proto_rawDescGZIP(), []int{0}
}

func (x *ThreatLog) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ThreatLog) GetThreatId() string {
	if x != nil {
		return x.ThreatId
	}
	return ""
}

func (x *ThreatLog) GetAlertTime() *timestamppb.Timestamp {
	if x != nil {
		return x.AlertTime
	}
	return nil
}

func (x *ThreatLog) GetAlertSeverity() ThreatLog_Severity {
	if x != nil {
		return x.AlertSeverity
	}
	return ThreatLog_SEVERITY_UNSPECIFIED
}

func (x *ThreatLog) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *ThreatLog) GetCategory() string {
	if x != nil {
		return x.Category
	}
	return ""
}

func (x *ThreatLog) GetSourceIpAddress() string {
	if x != nil {
		return x.SourceIpAddress
	}
	return ""
}

func (x *ThreatLog) GetSourcePort() int32 {
	if x != nil {
		return x.SourcePort
	}
	return 0
}

func (x *ThreatLog) GetDestinationIpAddress() string {
	if x != nil {
		return x.DestinationIpAddress
	}
	return ""
}

func (x *ThreatLog) GetDestinationPort() int32 {
	if x != nil {
		return x.DestinationPort
	}
	return 0
}

func (x *ThreatLog) GetIpProtocol() string {
	if x != nil {
		return x.IpProtocol
	}
	return ""
}

func (x *ThreatLog) GetDirection() ThreatLog_Direction {
	if x != nil {
		return x.Direction
	}
	return ThreatLog_DIRECTION_UNDEFINED
}

func (x *ThreatLog) GetSessionId() string {
	if x != nil {
		return x.SessionId
	}
	return ""
}

func (x *ThreatLog) GetRepeatCount() string {
	if x != nil {
		return x.RepeatCount
	}
	return ""
}

func (x *ThreatLog) GetApplication() string {
	if x != nil {
		return x.Application
	}
	return ""
}

func (x *ThreatLog) GetUriOrFilename() string {
	if x != nil {
		return x.UriOrFilename
	}
	return ""
}

func (x *ThreatLog) GetCves() []string {
	if x != nil {
		return x.Cves
	}
	return nil
}

func (x *ThreatLog) GetDetails() string {
	if x != nil {
		return x.Details
	}
	return ""
}

func (x *ThreatLog) GetNetwork() string {
	if x != nil {
		return x.Network
	}
	return ""
}

// Traffic detected by Cloud IDS.
// Fields taken from:
// https://docs.paloaltonetworks.com/pan-os/8-1/pan-os-admin/monitoring/use-syslog-for-monitoring/syslog-field-descriptions/traffic-log-fields.html.
type TrafficLog struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Time of session start.
	StartTime *timestamppb.Timestamp `protobuf:"bytes,1,opt,name=start_time,json=startTime,proto3" json:"start_time,omitempty"`
	// Elapsed time of the session.
	ElapsedTime *durationpb.Duration `protobuf:"bytes,2,opt,name=elapsed_time,json=elapsedTime,proto3" json:"elapsed_time,omitempty"`
	// The network associated with the IDS Endpoint.
	Network string `protobuf:"bytes,3,opt,name=network,proto3" json:"network,omitempty"`
	// The source IP Address of the packet, e.g. "35.191.8.79"
	SourceIpAddress string `protobuf:"bytes,4,opt,name=source_ip_address,json=sourceIpAddress,proto3" json:"source_ip_address,omitempty"`
	// The source port of the packet, e.g. 8080
	SourcePort int32 `protobuf:"varint,5,opt,name=source_port,json=sourcePort,proto3" json:"source_port,omitempty"`
	// The destination IP Address of the packet, e.g. "192.168.100.2"
	DestinationIpAddress string `protobuf:"bytes,6,opt,name=destination_ip_address,json=destinationIpAddress,proto3" json:"destination_ip_address,omitempty"`
	// The destination port of the packet, e.g. 100
	DestinationPort int32 `protobuf:"varint,7,opt,name=destination_port,json=destinationPort,proto3" json:"destination_port,omitempty"`
	// The IP protocol of the packet, e.g. "TCP".
	IpProtocol string `protobuf:"bytes,8,opt,name=ip_protocol,json=ipProtocol,proto3" json:"ip_protocol,omitempty"`
	// Application associated with the session.
	Application string `protobuf:"bytes,9,opt,name=application,proto3" json:"application,omitempty"`
	// The direction of the packet.
	SessionId string `protobuf:"bytes,12,opt,name=session_id,json=sessionId,proto3" json:"session_id,omitempty"`
	// Number of sessions with same source IP, destination IP, application, and
	// type seen within 5 seconds.
	RepeatCount string `protobuf:"bytes,13,opt,name=repeat_count,json=repeatCount,proto3" json:"repeat_count,omitempty"`
	// Total number of bytes transferred in the session.
	TotalBytes int64 `protobuf:"varint,14,opt,name=total_bytes,json=totalBytes,proto3" json:"total_bytes,omitempty"`
	// Total number of packets transferred in the session.
	TotalPackets int64 `protobuf:"varint,15,opt,name=total_packets,json=totalPackets,proto3" json:"total_packets,omitempty"`
}

func (x *TrafficLog) Reset() {
	*x = TrafficLog{}
	if protoimpl.UnsafeEnabled {
		mi := &file_google_cloud_ids_logging_v1_logging_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TrafficLog) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TrafficLog) ProtoMessage() {}

func (x *TrafficLog) ProtoReflect() protoreflect.Message {
	mi := &file_google_cloud_ids_logging_v1_logging_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TrafficLog.ProtoReflect.Descriptor instead.
func (*TrafficLog) Descriptor() ([]byte, []int) {
	return file_google_cloud_ids_logging_v1_logging_proto_rawDescGZIP(), []int{1}
}

func (x *TrafficLog) GetStartTime() *timestamppb.Timestamp {
	if x != nil {
		return x.StartTime
	}
	return nil
}

func (x *TrafficLog) GetElapsedTime() *durationpb.Duration {
	if x != nil {
		return x.ElapsedTime
	}
	return nil
}

func (x *TrafficLog) GetNetwork() string {
	if x != nil {
		return x.Network
	}
	return ""
}

func (x *TrafficLog) GetSourceIpAddress() string {
	if x != nil {
		return x.SourceIpAddress
	}
	return ""
}

func (x *TrafficLog) GetSourcePort() int32 {
	if x != nil {
		return x.SourcePort
	}
	return 0
}

func (x *TrafficLog) GetDestinationIpAddress() string {
	if x != nil {
		return x.DestinationIpAddress
	}
	return ""
}

func (x *TrafficLog) GetDestinationPort() int32 {
	if x != nil {
		return x.DestinationPort
	}
	return 0
}

func (x *TrafficLog) GetIpProtocol() string {
	if x != nil {
		return x.IpProtocol
	}
	return ""
}

func (x *TrafficLog) GetApplication() string {
	if x != nil {
		return x.Application
	}
	return ""
}

func (x *TrafficLog) GetSessionId() string {
	if x != nil {
		return x.SessionId
	}
	return ""
}

func (x *TrafficLog) GetRepeatCount() string {
	if x != nil {
		return x.RepeatCount
	}
	return ""
}

func (x *TrafficLog) GetTotalBytes() int64 {
	if x != nil {
		return x.TotalBytes
	}
	return 0
}

func (x *TrafficLog) GetTotalPackets() int64 {
	if x != nil {
		return x.TotalPackets
	}
	return 0
}

var File_google_cloud_ids_logging_v1_logging_proto protoreflect.FileDescriptor

var file_google_cloud_ids_logging_v1_logging_proto_rawDesc = []byte{
	0x0a, 0x29, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x69,
	0x64, 0x73, 0x2f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2f, 0x76, 0x31, 0x2f, 0x6c, 0x6f,
	0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1b, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x69, 0x64, 0x73, 0x2e, 0x6c, 0x6f,
	0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xaa, 0x07, 0x0a, 0x09, 0x54, 0x68,
	0x72, 0x65, 0x61, 0x74, 0x4c, 0x6f, 0x67, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x74,
	0x68, 0x72, 0x65, 0x61, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x74, 0x68, 0x72, 0x65, 0x61, 0x74, 0x49, 0x64, 0x12, 0x39, 0x0a, 0x0a, 0x61, 0x6c, 0x65, 0x72,
	0x74, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x61, 0x6c, 0x65, 0x72, 0x74, 0x54,
	0x69, 0x6d, 0x65, 0x12, 0x56, 0x0a, 0x0e, 0x61, 0x6c, 0x65, 0x72, 0x74, 0x5f, 0x73, 0x65, 0x76,
	0x65, 0x72, 0x69, 0x74, 0x79, 0x18, 0x13, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2f, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x69, 0x64, 0x73, 0x2e, 0x6c,
	0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x68, 0x72, 0x65, 0x61, 0x74,
	0x4c, 0x6f, 0x67, 0x2e, 0x53, 0x65, 0x76, 0x65, 0x72, 0x69, 0x74, 0x79, 0x52, 0x0d, 0x61, 0x6c,
	0x65, 0x72, 0x74, 0x53, 0x65, 0x76, 0x65, 0x72, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12,
	0x1a, 0x0a, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x18, 0x12, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x12, 0x2a, 0x0a, 0x11, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x69, 0x70, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x49, 0x70,
	0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x5f, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x50, 0x6f, 0x72, 0x74, 0x12, 0x34, 0x0a, 0x16, 0x64, 0x65, 0x73, 0x74,
	0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x70, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x14, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x70, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x29,
	0x0a, 0x10, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x70, 0x6f,
	0x72, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0f, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x72, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x69, 0x70, 0x5f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a,
	0x69, 0x70, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x12, 0x4e, 0x0a, 0x09, 0x64, 0x69,
	0x72, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x30, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x69, 0x64, 0x73,
	0x2e, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x54, 0x68, 0x72, 0x65,
	0x61, 0x74, 0x4c, 0x6f, 0x67, 0x2e, 0x44, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x09, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x65,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x72, 0x65, 0x70,
	0x65, 0x61, 0x74, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x72, 0x65, 0x70, 0x65, 0x61, 0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x20, 0x0a, 0x0b,
	0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x10, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x26,
	0x0a, 0x0f, 0x75, 0x72, 0x69, 0x5f, 0x6f, 0x72, 0x5f, 0x66, 0x69, 0x6c, 0x65, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x11, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x75, 0x72, 0x69, 0x4f, 0x72, 0x46, 0x69,
	0x6c, 0x65, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x76, 0x65, 0x73, 0x18, 0x14,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x04, 0x63, 0x76, 0x65, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x64, 0x65,
	0x74, 0x61, 0x69, 0x6c, 0x73, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x64, 0x65, 0x74,
	0x61, 0x69, 0x6c, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x18,
	0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x22, 0x64,
	0x0a, 0x08, 0x53, 0x65, 0x76, 0x65, 0x72, 0x69, 0x74, 0x79, 0x12, 0x18, 0x0a, 0x14, 0x53, 0x45,
	0x56, 0x45, 0x52, 0x49, 0x54, 0x59, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49,
	0x45, 0x44, 0x10, 0x00, 0x12, 0x07, 0x0a, 0x03, 0x4c, 0x4f, 0x57, 0x10, 0x02, 0x12, 0x0a, 0x0a,
	0x06, 0x4d, 0x45, 0x44, 0x49, 0x55, 0x4d, 0x10, 0x03, 0x12, 0x08, 0x0a, 0x04, 0x48, 0x49, 0x47,
	0x48, 0x10, 0x04, 0x12, 0x0c, 0x0a, 0x08, 0x43, 0x52, 0x49, 0x54, 0x49, 0x43, 0x41, 0x4c, 0x10,
	0x05, 0x12, 0x11, 0x0a, 0x0d, 0x49, 0x4e, 0x46, 0x4f, 0x52, 0x4d, 0x41, 0x54, 0x49, 0x4f, 0x4e,
	0x41, 0x4c, 0x10, 0x06, 0x22, 0x50, 0x0a, 0x09, 0x44, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x17, 0x0a, 0x13, 0x44, 0x49, 0x52, 0x45, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x55,
	0x4e, 0x44, 0x45, 0x46, 0x49, 0x4e, 0x45, 0x44, 0x10, 0x00, 0x12, 0x14, 0x0a, 0x10, 0x43, 0x4c,
	0x49, 0x45, 0x4e, 0x54, 0x5f, 0x54, 0x4f, 0x5f, 0x53, 0x45, 0x52, 0x56, 0x45, 0x52, 0x10, 0x01,
	0x12, 0x14, 0x0a, 0x10, 0x53, 0x45, 0x52, 0x56, 0x45, 0x52, 0x5f, 0x54, 0x4f, 0x5f, 0x43, 0x4c,
	0x49, 0x45, 0x4e, 0x54, 0x10, 0x02, 0x22, 0x98, 0x04, 0x0a, 0x0a, 0x54, 0x72, 0x61, 0x66, 0x66,
	0x69, 0x63, 0x4c, 0x6f, 0x67, 0x12, 0x39, 0x0a, 0x0a, 0x73, 0x74, 0x61, 0x72, 0x74, 0x5f, 0x74,
	0x69, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x73, 0x74, 0x61, 0x72, 0x74, 0x54, 0x69, 0x6d, 0x65,
	0x12, 0x3c, 0x0a, 0x0c, 0x65, 0x6c, 0x61, 0x70, 0x73, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x0b, 0x65, 0x6c, 0x61, 0x70, 0x73, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x18,
	0x0a, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x12, 0x2a, 0x0a, 0x11, 0x73, 0x6f, 0x75, 0x72,
	0x63, 0x65, 0x5f, 0x69, 0x70, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0f, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x49, 0x70, 0x41, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x70,
	0x6f, 0x72, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x50, 0x6f, 0x72, 0x74, 0x12, 0x34, 0x0a, 0x16, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x70, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x14, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x49, 0x70, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x29, 0x0a, 0x10, 0x64,
	0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x70, 0x6f, 0x72, 0x74, 0x18,
	0x07, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0f, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x50, 0x6f, 0x72, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x69, 0x70, 0x5f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x69, 0x70, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x12, 0x20, 0x0a, 0x0b, 0x61, 0x70, 0x70, 0x6c, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x61, 0x70,
	0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x65, 0x73,
	0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x73,
	0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x72, 0x65, 0x70, 0x65,
	0x61, 0x74, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x72, 0x65, 0x70, 0x65, 0x61, 0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x74,
	0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x62, 0x79, 0x74, 0x65, 0x73, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x0a, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x42, 0x79, 0x74, 0x65, 0x73, 0x12, 0x23, 0x0a, 0x0d,
	0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x70, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x73, 0x18, 0x0f, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x0c, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x50, 0x61, 0x63, 0x6b, 0x65, 0x74,
	0x73, 0x42, 0x75, 0x0a, 0x1f, 0x63, 0x6f, 0x6d, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x69, 0x64, 0x73, 0x2e, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e,
	0x67, 0x2e, 0x76, 0x31, 0x42, 0x0c, 0x4c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x42, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x67, 0x6f, 0x6c,
	0x61, 0x6e, 0x67, 0x2e, 0x6f, 0x72, 0x67, 0x2f, 0x67, 0x65, 0x6e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x61, 0x70, 0x69, 0x73, 0x2f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x2f, 0x69, 0x64, 0x73, 0x2f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2f, 0x76, 0x31,
	0x3b, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_google_cloud_ids_logging_v1_logging_proto_rawDescOnce sync.Once
	file_google_cloud_ids_logging_v1_logging_proto_rawDescData = file_google_cloud_ids_logging_v1_logging_proto_rawDesc
)

func file_google_cloud_ids_logging_v1_logging_proto_rawDescGZIP() []byte {
	file_google_cloud_ids_logging_v1_logging_proto_rawDescOnce.Do(func() {
		file_google_cloud_ids_logging_v1_logging_proto_rawDescData = protoimpl.X.CompressGZIP(file_google_cloud_ids_logging_v1_logging_proto_rawDescData)
	})
	return file_google_cloud_ids_logging_v1_logging_proto_rawDescData
}

var file_google_cloud_ids_logging_v1_logging_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_google_cloud_ids_logging_v1_logging_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_google_cloud_ids_logging_v1_logging_proto_goTypes = []interface{}{
	(ThreatLog_Severity)(0),       // 0: google.cloud.ids.logging.v1.ThreatLog.Severity
	(ThreatLog_Direction)(0),      // 1: google.cloud.ids.logging.v1.ThreatLog.Direction
	(*ThreatLog)(nil),             // 2: google.cloud.ids.logging.v1.ThreatLog
	(*TrafficLog)(nil),            // 3: google.cloud.ids.logging.v1.TrafficLog
	(*timestamppb.Timestamp)(nil), // 4: google.protobuf.Timestamp
	(*durationpb.Duration)(nil),   // 5: google.protobuf.Duration
}
var file_google_cloud_ids_logging_v1_logging_proto_depIdxs = []int32{
	4, // 0: google.cloud.ids.logging.v1.ThreatLog.alert_time:type_name -> google.protobuf.Timestamp
	0, // 1: google.cloud.ids.logging.v1.ThreatLog.alert_severity:type_name -> google.cloud.ids.logging.v1.ThreatLog.Severity
	1, // 2: google.cloud.ids.logging.v1.ThreatLog.direction:type_name -> google.cloud.ids.logging.v1.ThreatLog.Direction
	4, // 3: google.cloud.ids.logging.v1.TrafficLog.start_time:type_name -> google.protobuf.Timestamp
	5, // 4: google.cloud.ids.logging.v1.TrafficLog.elapsed_time:type_name -> google.protobuf.Duration
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_google_cloud_ids_logging_v1_logging_proto_init() }
func file_google_cloud_ids_logging_v1_logging_proto_init() {
	if File_google_cloud_ids_logging_v1_logging_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_google_cloud_ids_logging_v1_logging_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ThreatLog); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_google_cloud_ids_logging_v1_logging_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TrafficLog); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_google_cloud_ids_logging_v1_logging_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_google_cloud_ids_logging_v1_logging_proto_goTypes,
		DependencyIndexes: file_google_cloud_ids_logging_v1_logging_proto_depIdxs,
		EnumInfos:         file_google_cloud_ids_logging_v1_logging_proto_enumTypes,
		MessageInfos:      file_google_cloud_ids_logging_v1_logging_proto_msgTypes,
	}.Build()
	File_google_cloud_ids_logging_v1_logging_proto = out.File
	file_google_cloud_ids_logging_v1_logging_proto_rawDesc = nil
	file_google_cloud_ids_logging_v1_logging_proto_goTypes = nil
	file_google_cloud_ids_logging_v1_logging_proto_depIdxs = nil
}
