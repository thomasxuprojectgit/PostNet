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
// source: google/cloud/visionai/v1alpha1/lva.proto

package visionai

import (
	reflect "reflect"
	sync "sync"

	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Represents an actual value of an operator attribute.
type AttributeValue struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Attribute value.
	//
	// Types that are assignable to Value:
	//
	//	*AttributeValue_I
	//	*AttributeValue_F
	//	*AttributeValue_B
	//	*AttributeValue_S
	Value isAttributeValue_Value `protobuf_oneof:"value"`
}

func (x *AttributeValue) Reset() {
	*x = AttributeValue{}
	if protoimpl.UnsafeEnabled {
		mi := &file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AttributeValue) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AttributeValue) ProtoMessage() {}

func (x *AttributeValue) ProtoReflect() protoreflect.Message {
	mi := &file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AttributeValue.ProtoReflect.Descriptor instead.
func (*AttributeValue) Descriptor() ([]byte, []int) {
	return file_google_cloud_visionai_v1alpha1_lva_proto_rawDescGZIP(), []int{0}
}

func (m *AttributeValue) GetValue() isAttributeValue_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (x *AttributeValue) GetI() int64 {
	if x, ok := x.GetValue().(*AttributeValue_I); ok {
		return x.I
	}
	return 0
}

func (x *AttributeValue) GetF() float32 {
	if x, ok := x.GetValue().(*AttributeValue_F); ok {
		return x.F
	}
	return 0
}

func (x *AttributeValue) GetB() bool {
	if x, ok := x.GetValue().(*AttributeValue_B); ok {
		return x.B
	}
	return false
}

func (x *AttributeValue) GetS() []byte {
	if x, ok := x.GetValue().(*AttributeValue_S); ok {
		return x.S
	}
	return nil
}

type isAttributeValue_Value interface {
	isAttributeValue_Value()
}

type AttributeValue_I struct {
	// int.
	I int64 `protobuf:"varint,1,opt,name=i,proto3,oneof"`
}

type AttributeValue_F struct {
	// float.
	F float32 `protobuf:"fixed32,2,opt,name=f,proto3,oneof"`
}

type AttributeValue_B struct {
	// bool.
	B bool `protobuf:"varint,3,opt,name=b,proto3,oneof"`
}

type AttributeValue_S struct {
	// string.
	S []byte `protobuf:"bytes,4,opt,name=s,proto3,oneof"`
}

func (*AttributeValue_I) isAttributeValue_Value() {}

func (*AttributeValue_F) isAttributeValue_Value() {}

func (*AttributeValue_B) isAttributeValue_Value() {}

func (*AttributeValue_S) isAttributeValue_Value() {}

// Defines an Analyzer.
//
// An analyzer processes data from its input streams using the logic defined in
// the Operator that it represents. Of course, it produces data for the output
// streams declared in the Operator.
type AnalyzerDefinition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of this analyzer.
	//
	// Tentatively [a-z][a-z0-9]*(_[a-z0-9]+)*.
	Analyzer string `protobuf:"bytes,1,opt,name=analyzer,proto3" json:"analyzer,omitempty"`
	// The name of the operator that this analyzer runs.
	//
	// Must match the name of a supported operator.
	Operator string `protobuf:"bytes,2,opt,name=operator,proto3" json:"operator,omitempty"`
	// Input streams.
	Inputs []*AnalyzerDefinition_StreamInput `protobuf:"bytes,3,rep,name=inputs,proto3" json:"inputs,omitempty"`
	// The attribute values that this analyzer applies to the operator.
	//
	// Supply a mapping between the attribute names and the actual value you wish
	// to apply. If an attribute name is omitted, then it will take a
	// preconfigured default value.
	Attrs map[string]*AttributeValue `protobuf:"bytes,4,rep,name=attrs,proto3" json:"attrs,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Debug options.
	DebugOptions *AnalyzerDefinition_DebugOptions `protobuf:"bytes,5,opt,name=debug_options,json=debugOptions,proto3" json:"debug_options,omitempty"`
}

func (x *AnalyzerDefinition) Reset() {
	*x = AnalyzerDefinition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AnalyzerDefinition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AnalyzerDefinition) ProtoMessage() {}

func (x *AnalyzerDefinition) ProtoReflect() protoreflect.Message {
	mi := &file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AnalyzerDefinition.ProtoReflect.Descriptor instead.
func (*AnalyzerDefinition) Descriptor() ([]byte, []int) {
	return file_google_cloud_visionai_v1alpha1_lva_proto_rawDescGZIP(), []int{1}
}

func (x *AnalyzerDefinition) GetAnalyzer() string {
	if x != nil {
		return x.Analyzer
	}
	return ""
}

func (x *AnalyzerDefinition) GetOperator() string {
	if x != nil {
		return x.Operator
	}
	return ""
}

func (x *AnalyzerDefinition) GetInputs() []*AnalyzerDefinition_StreamInput {
	if x != nil {
		return x.Inputs
	}
	return nil
}

func (x *AnalyzerDefinition) GetAttrs() map[string]*AttributeValue {
	if x != nil {
		return x.Attrs
	}
	return nil
}

func (x *AnalyzerDefinition) GetDebugOptions() *AnalyzerDefinition_DebugOptions {
	if x != nil {
		return x.DebugOptions
	}
	return nil
}

// Defines a full analysis.
//
// This is a description of the overall live analytics pipeline.
// You may think of this as an edge list representation of a multigraph.
//
// This may be directly authored by a human in protobuf textformat, or it may be
// generated by a programming API (perhaps Python or JavaScript depending on
// context).
type AnalysisDefinition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Analyzer definitions.
	Analyzers []*AnalyzerDefinition `protobuf:"bytes,1,rep,name=analyzers,proto3" json:"analyzers,omitempty"`
}

func (x *AnalysisDefinition) Reset() {
	*x = AnalysisDefinition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AnalysisDefinition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AnalysisDefinition) ProtoMessage() {}

func (x *AnalysisDefinition) ProtoReflect() protoreflect.Message {
	mi := &file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AnalysisDefinition.ProtoReflect.Descriptor instead.
func (*AnalysisDefinition) Descriptor() ([]byte, []int) {
	return file_google_cloud_visionai_v1alpha1_lva_proto_rawDescGZIP(), []int{2}
}

func (x *AnalysisDefinition) GetAnalyzers() []*AnalyzerDefinition {
	if x != nil {
		return x.Analyzers
	}
	return nil
}

// The inputs to this analyzer.
//
// We accept input name references of the following form:
// <analyzer-name>:<output-argument-name>
//
// Example:
//
// Suppose you had an operator named "SomeOp" that has 2 output
// arguments, the first of which is named "foo" and the second of which is
// named "bar", and an operator named "MyOp" that accepts 2 inputs.
//
// Also suppose that there is an analyzer named "some-analyzer" that is
// running "SomeOp" and another analyzer named "my-analyzer" running "MyOp".
//
// To indicate that "my-analyzer" is to consume "some-analyzer"'s "foo"
// output as its first input and "some-analyzer"'s "bar" output as its
// second input, you can set this field to the following:
// input = ["some-analyzer:foo", "some-analyzer:bar"]
type AnalyzerDefinition_StreamInput struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the stream input (as discussed above).
	Input string `protobuf:"bytes,1,opt,name=input,proto3" json:"input,omitempty"`
}

func (x *AnalyzerDefinition_StreamInput) Reset() {
	*x = AnalyzerDefinition_StreamInput{}
	if protoimpl.UnsafeEnabled {
		mi := &file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AnalyzerDefinition_StreamInput) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AnalyzerDefinition_StreamInput) ProtoMessage() {}

func (x *AnalyzerDefinition_StreamInput) ProtoReflect() protoreflect.Message {
	mi := &file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AnalyzerDefinition_StreamInput.ProtoReflect.Descriptor instead.
func (*AnalyzerDefinition_StreamInput) Descriptor() ([]byte, []int) {
	return file_google_cloud_visionai_v1alpha1_lva_proto_rawDescGZIP(), []int{1, 0}
}

func (x *AnalyzerDefinition_StreamInput) GetInput() string {
	if x != nil {
		return x.Input
	}
	return ""
}

// Options available for debugging purposes only.
type AnalyzerDefinition_DebugOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Environment variables.
	EnvironmentVariables map[string]string `protobuf:"bytes,1,rep,name=environment_variables,json=environmentVariables,proto3" json:"environment_variables,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *AnalyzerDefinition_DebugOptions) Reset() {
	*x = AnalyzerDefinition_DebugOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AnalyzerDefinition_DebugOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AnalyzerDefinition_DebugOptions) ProtoMessage() {}

func (x *AnalyzerDefinition_DebugOptions) ProtoReflect() protoreflect.Message {
	mi := &file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AnalyzerDefinition_DebugOptions.ProtoReflect.Descriptor instead.
func (*AnalyzerDefinition_DebugOptions) Descriptor() ([]byte, []int) {
	return file_google_cloud_visionai_v1alpha1_lva_proto_rawDescGZIP(), []int{1, 1}
}

func (x *AnalyzerDefinition_DebugOptions) GetEnvironmentVariables() map[string]string {
	if x != nil {
		return x.EnvironmentVariables
	}
	return nil
}

var File_google_cloud_visionai_v1alpha1_lva_proto protoreflect.FileDescriptor

var file_google_cloud_visionai_v1alpha1_lva_proto_rawDesc = []byte{
	0x0a, 0x28, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x76,
	0x69, 0x73, 0x69, 0x6f, 0x6e, 0x61, 0x69, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2f, 0x6c, 0x76, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x61,
	0x69, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0x59, 0x0a, 0x0e, 0x41, 0x74,
	0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x0e, 0x0a, 0x01,
	0x69, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x48, 0x00, 0x52, 0x01, 0x69, 0x12, 0x0e, 0x0a, 0x01,
	0x66, 0x18, 0x02, 0x20, 0x01, 0x28, 0x02, 0x48, 0x00, 0x52, 0x01, 0x66, 0x12, 0x0e, 0x0a, 0x01,
	0x62, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x48, 0x00, 0x52, 0x01, 0x62, 0x12, 0x0e, 0x0a, 0x01,
	0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0c, 0x48, 0x00, 0x52, 0x01, 0x73, 0x42, 0x07, 0x0a, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0xd9, 0x05, 0x0a, 0x12, 0x41, 0x6e, 0x61, 0x6c, 0x79, 0x7a,
	0x65, 0x72, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x0a, 0x08,
	0x61, 0x6e, 0x61, 0x6c, 0x79, 0x7a, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x61, 0x6e, 0x61, 0x6c, 0x79, 0x7a, 0x65, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x6f, 0x70, 0x65, 0x72,
	0x61, 0x74, 0x6f, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6f, 0x70, 0x65, 0x72,
	0x61, 0x74, 0x6f, 0x72, 0x12, 0x56, 0x0a, 0x06, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x73, 0x18, 0x03,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x3e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x63, 0x6c,
	0x6f, 0x75, 0x64, 0x2e, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x61, 0x69, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x41, 0x6e, 0x61, 0x6c, 0x79, 0x7a, 0x65, 0x72, 0x44, 0x65,
	0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x49,
	0x6e, 0x70, 0x75, 0x74, 0x52, 0x06, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x73, 0x12, 0x53, 0x0a, 0x05,
	0x61, 0x74, 0x74, 0x72, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x3d, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x76, 0x69, 0x73, 0x69, 0x6f,
	0x6e, 0x61, 0x69, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x41, 0x6e, 0x61,
	0x6c, 0x79, 0x7a, 0x65, 0x72, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x41, 0x74, 0x74, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x05, 0x61, 0x74, 0x74, 0x72,
	0x73, 0x12, 0x64, 0x0a, 0x0d, 0x64, 0x65, 0x62, 0x75, 0x67, 0x5f, 0x6f, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x3f, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x61, 0x69,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x41, 0x6e, 0x61, 0x6c, 0x79, 0x7a,
	0x65, 0x72, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x44, 0x65, 0x62,
	0x75, 0x67, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x0c, 0x64, 0x65, 0x62, 0x75, 0x67,
	0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x1a, 0x23, 0x0a, 0x0b, 0x53, 0x74, 0x72, 0x65, 0x61,
	0x6d, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x1a, 0xe8, 0x01, 0x0a,
	0x0c, 0x44, 0x65, 0x62, 0x75, 0x67, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x8e, 0x01,
	0x0a, 0x15, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x76, 0x61,
	0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x59, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x76, 0x69, 0x73,
	0x69, 0x6f, 0x6e, 0x61, 0x69, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x41,
	0x6e, 0x61, 0x6c, 0x79, 0x7a, 0x65, 0x72, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x2e, 0x44, 0x65, 0x62, 0x75, 0x67, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x45,
	0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x56, 0x61, 0x72, 0x69, 0x61, 0x62,
	0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x14, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f,
	0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x56, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x1a, 0x47,
	0x0a, 0x19, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x56, 0x61, 0x72,
	0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x68, 0x0a, 0x0a, 0x41, 0x74, 0x74, 0x72, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x44, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x61, 0x69, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74,
	0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38,
	0x01, 0x22, 0x66, 0x0a, 0x12, 0x41, 0x6e, 0x61, 0x6c, 0x79, 0x73, 0x69, 0x73, 0x44, 0x65, 0x66,
	0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x50, 0x0a, 0x09, 0x61, 0x6e, 0x61, 0x6c, 0x79,
	0x7a, 0x65, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x32, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e,
	0x61, 0x69, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x41, 0x6e, 0x61, 0x6c,
	0x79, 0x7a, 0x65, 0x72, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x09,
	0x61, 0x6e, 0x61, 0x6c, 0x79, 0x7a, 0x65, 0x72, 0x73, 0x42, 0xde, 0x01, 0x0a, 0x22, 0x63, 0x6f,
	0x6d, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x76,
	0x69, 0x73, 0x69, 0x6f, 0x6e, 0x61, 0x69, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x42, 0x08, 0x4c, 0x76, 0x61, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x46, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x67, 0x6f, 0x6c, 0x61, 0x6e, 0x67, 0x2e, 0x6f, 0x72, 0x67, 0x2f,
	0x67, 0x65, 0x6e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x61,
	0x70, 0x69, 0x73, 0x2f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2f, 0x76, 0x69, 0x73, 0x69, 0x6f, 0x6e,
	0x61, 0x69, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x3b, 0x76, 0x69, 0x73, 0x69,
	0x6f, 0x6e, 0x61, 0x69, 0xaa, 0x02, 0x1e, 0x47, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x43, 0x6c,
	0x6f, 0x75, 0x64, 0x2e, 0x56, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x41, 0x49, 0x2e, 0x56, 0x31, 0x41,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x1e, 0x47, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x5c, 0x43,
	0x6c, 0x6f, 0x75, 0x64, 0x5c, 0x56, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x41, 0x49, 0x5c, 0x56, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xea, 0x02, 0x21, 0x47, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x3a,
	0x3a, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x3a, 0x3a, 0x56, 0x69, 0x73, 0x69, 0x6f, 0x6e, 0x41, 0x49,
	0x3a, 0x3a, 0x56, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_google_cloud_visionai_v1alpha1_lva_proto_rawDescOnce sync.Once
	file_google_cloud_visionai_v1alpha1_lva_proto_rawDescData = file_google_cloud_visionai_v1alpha1_lva_proto_rawDesc
)

func file_google_cloud_visionai_v1alpha1_lva_proto_rawDescGZIP() []byte {
	file_google_cloud_visionai_v1alpha1_lva_proto_rawDescOnce.Do(func() {
		file_google_cloud_visionai_v1alpha1_lva_proto_rawDescData = protoimpl.X.CompressGZIP(file_google_cloud_visionai_v1alpha1_lva_proto_rawDescData)
	})
	return file_google_cloud_visionai_v1alpha1_lva_proto_rawDescData
}

var file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_google_cloud_visionai_v1alpha1_lva_proto_goTypes = []interface{}{
	(*AttributeValue)(nil),                  // 0: google.cloud.visionai.v1alpha1.AttributeValue
	(*AnalyzerDefinition)(nil),              // 1: google.cloud.visionai.v1alpha1.AnalyzerDefinition
	(*AnalysisDefinition)(nil),              // 2: google.cloud.visionai.v1alpha1.AnalysisDefinition
	(*AnalyzerDefinition_StreamInput)(nil),  // 3: google.cloud.visionai.v1alpha1.AnalyzerDefinition.StreamInput
	(*AnalyzerDefinition_DebugOptions)(nil), // 4: google.cloud.visionai.v1alpha1.AnalyzerDefinition.DebugOptions
	nil,                                     // 5: google.cloud.visionai.v1alpha1.AnalyzerDefinition.AttrsEntry
	nil,                                     // 6: google.cloud.visionai.v1alpha1.AnalyzerDefinition.DebugOptions.EnvironmentVariablesEntry
}
var file_google_cloud_visionai_v1alpha1_lva_proto_depIdxs = []int32{
	3, // 0: google.cloud.visionai.v1alpha1.AnalyzerDefinition.inputs:type_name -> google.cloud.visionai.v1alpha1.AnalyzerDefinition.StreamInput
	5, // 1: google.cloud.visionai.v1alpha1.AnalyzerDefinition.attrs:type_name -> google.cloud.visionai.v1alpha1.AnalyzerDefinition.AttrsEntry
	4, // 2: google.cloud.visionai.v1alpha1.AnalyzerDefinition.debug_options:type_name -> google.cloud.visionai.v1alpha1.AnalyzerDefinition.DebugOptions
	1, // 3: google.cloud.visionai.v1alpha1.AnalysisDefinition.analyzers:type_name -> google.cloud.visionai.v1alpha1.AnalyzerDefinition
	6, // 4: google.cloud.visionai.v1alpha1.AnalyzerDefinition.DebugOptions.environment_variables:type_name -> google.cloud.visionai.v1alpha1.AnalyzerDefinition.DebugOptions.EnvironmentVariablesEntry
	0, // 5: google.cloud.visionai.v1alpha1.AnalyzerDefinition.AttrsEntry.value:type_name -> google.cloud.visionai.v1alpha1.AttributeValue
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_google_cloud_visionai_v1alpha1_lva_proto_init() }
func file_google_cloud_visionai_v1alpha1_lva_proto_init() {
	if File_google_cloud_visionai_v1alpha1_lva_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AttributeValue); i {
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
		file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AnalyzerDefinition); i {
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
		file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AnalysisDefinition); i {
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
		file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AnalyzerDefinition_StreamInput); i {
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
		file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AnalyzerDefinition_DebugOptions); i {
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
	file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*AttributeValue_I)(nil),
		(*AttributeValue_F)(nil),
		(*AttributeValue_B)(nil),
		(*AttributeValue_S)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_google_cloud_visionai_v1alpha1_lva_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_google_cloud_visionai_v1alpha1_lva_proto_goTypes,
		DependencyIndexes: file_google_cloud_visionai_v1alpha1_lva_proto_depIdxs,
		MessageInfos:      file_google_cloud_visionai_v1alpha1_lva_proto_msgTypes,
	}.Build()
	File_google_cloud_visionai_v1alpha1_lva_proto = out.File
	file_google_cloud_visionai_v1alpha1_lva_proto_rawDesc = nil
	file_google_cloud_visionai_v1alpha1_lva_proto_goTypes = nil
	file_google_cloud_visionai_v1alpha1_lva_proto_depIdxs = nil
}
